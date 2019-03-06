import React, { PureComponent, createRef } from 'react';

import Grid from '@material-ui/core/Grid';
import io from 'socket.io-client';

import { extractDataFromReadings } from 'utils';
import { SelectComponent, LineChartComponent } from './components';

class Home extends PureComponent {
    constructor() {
        super();
        this.myInput = createRef();
        this.state = {
            meters: [],
            readings: {},
            activeMeter: '',
            offsetWidth: 0,
        };
    }

    componentDidMount() {
        const socket = io('http://localhost:3000');
        socket.on('connect', this.handleOnConnect);
        socket.on('readings', this.handleOnEvent);
        socket.on('disconnect', this.handleOnDisconnect);
        const { offsetWidth } = this.myInput.current;
        this.setState({ offsetWidth });
    }

    handleOnConnect = () => console.log('desktop connected');

    handleOnEvent = (readings) => {
        const newMeters = Object.keys(readings);
        const { meters, activeMeter } = this.state;

        if (JSON.stringify(newMeters) === JSON.stringify(meters)) {
            return this.setState({ readings });
        }

        if (newMeters.length && !activeMeter) {
            this.setState({ activeMeter: newMeters[0] });
        }
        return this.setState({
            readings,
            meters: newMeters,
        });
    };

    handleOnDisconnect = data => console.log(data);

    onChangeMeter = activeMeter => this.setState({ activeMeter });

    render() {
        const {
            meters,
            readings,
            activeMeter,
            offsetWidth,
        } = this.state;
        const data = extractDataFromReadings(readings, activeMeter);
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Grid container direction="row" spacing={40} alignItems="center">
                        <Grid item xs={9}>
                            <div ref={this.myInput}>
                                <LineChartComponent
                                    data={data}
                                    activeMeter={activeMeter}
                                    width={offsetWidth}
                                    height={640}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <SelectComponent
                                meters={meters}
                                activeMeter={activeMeter}
                                onChangeMeter={this.onChangeMeter}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
