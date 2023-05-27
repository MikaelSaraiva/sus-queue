const { getUserInformantion } = require('/home/saraiva/documents/ufsc/tgs/sheet-manager/sheetManager.js')


module.exports = app => {
    const controller = {};

    controller.getUserInformation = async (req, res) => {
        let userInfo = await getUserInformantion(req.body.name)

        res.status(200).json({
            "result": "sucess",
            "informations": userInfo
        })
    }

    return controller;
}