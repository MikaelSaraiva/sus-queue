module.exports = app => {
    const queueUsersDB = app.data.queueUsers;
    const controller = {};


    const {
        queueUsers: queueUsersMock,
    } = queueUsersDB

    controller.listUserName = (req, res) => res.status(200).json(queueUsersDB);

    controller.saveUserName = (req, res) => {
        queueUsersMock[data][req.body.name] = {}

        res.status(200).json({
            "result": "sucess",
            "description": `Name ${req.body.name} saved`
        })
    }

    controller.saveQueueStatus = (req, res) => {
        queueUsersMock[data][req.body.name] = {
            "color": req.body.color,
            "position": req.body.position,
            "colors": {
                "red": req.body.red,
                "yellow": req.body.yellow,
                "green": req.body.green,
                "blue": req.body.blue
            }
        }

        res.status(200).json({
            "result": "sucess",
            "description": `Dados atualizados`,
            "req.body.name": queueUsersMock[data][req.body.name]
        })
    }

    return controller;
}