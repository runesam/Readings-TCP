const dashboard = (req, res) => {
    res.send({
        user: req.user,
        dashboard: [
            { name: 'Orders', value: 9823 },
            { name: 'Members online', value: 4342 },
            { name: 'Confirmed orders', value: 1042 },
            { name: 'Unanswered', value: 1002 },
        ],
    });
};

module.exports = dashboard;
