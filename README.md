# READING TCP SERVER

Data stream format
Our .jar will produce a stream of JSON messages in TCP packets. This stream will include data for several smart meters, including consumption data and status messages on the health of the smart meters. Each message will be sent as a singl line ending with LF. It is also expected that control messages sent by client ending with LF. You will find the .jar file in the root of this repo with the name readings-server.jar.

You can run the application with java -jar readings-server.jar <port> <meters-count>

For example, to run on port 10001, transmitting data for 5 meters, run java -jar readings-server.jar 10001 5.

Note: the ports betwean 9000..(9000 + number_of_meters) will be used for receiving controll messages, make sure that those ports are free for usage.


### find in app
* yarn
* webpack
* babel
* nodeJs
* react
* redux
* JWT
* bcrypt
* mySQL
* socket.io
* reChart
* material UI


### to run the app
   * make sure both `nodemon` and `yarn` are installed globally.
        `brew install yarn`
        `npm install -g nodemon`
   * install application dependencies via `yarn`.
   * app is relying on the following ports `3000` , `5000` and the ports mentioned in the TCP server read me. so all should be free.
   * run the app via `yarn app`. This command will initiate TCP reading server, the app server and the app client `front end`.
   * navigate to the client app `http://localhost:5000`.
   * you can login using the following credential `runesam` as email and `rogina003` as password.
   * you can check the log messages to assert `CONTROL` message being handled correctly.
    
    
### Not in the app
* testing
* chart is not responsive
* clean code
