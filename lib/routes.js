FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/categories', {
  name: 'categories',
  action() {
    BlazeLayout.render('categories');
  }
});

FlowRouter.route('/createLobby', {
  name: 'createLobby',
  action() {
    BlazeLayout.render('createLobby');
  }
});

FlowRouter.route('/help', {
  name: 'help',
  action() {
    BlazeLayout.render('help');
  }
});

FlowRouter.route('/landing', {
  name: 'landing',
  action() {
    BlazeLayout.render('landing');
  }
});

FlowRouter.route('/lobbyDisplay', {
  name: 'lobbyDisplay',
  action() {
    BlazeLayout.render('lobbyDisplay');
  }
});

FlowRouter.route('/lobbyFilter', {
  name: 'lobbyFilter',
  action() {
    BlazeLayout.render('lobbyFilter');
  }
});