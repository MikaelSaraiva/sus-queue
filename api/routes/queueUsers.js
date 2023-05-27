module.exports = app => {
    const controller = app.controllers.queueUsers;
  
    app.route('/api/v1/queue-users')
      .get(controller.listUserName);
  }