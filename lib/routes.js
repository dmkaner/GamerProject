FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/createLobby', {
  name: 'createLobby',
  action() {
    BlazeLayout.render('createLobby');
  }
});

FlowRouter.route('/createLobby/game', {
  name: 'pickGame',
  action() {
    BlazeLayout.render('pickGame');
  }
});

FlowRouter.route('/createLobby/console', {
  name: 'pickConsole',
  action() {
    BlazeLayout.render('pickConsole');
  }
});

FlowRouter.route('/createLobby/players', {
  name: 'pickPlay',
  action() {
    BlazeLayout.render('pickPlay');
  }
});

FlowRouter.route('/createLobby/mic', {
  name: 'pickMic',
  action() {
    BlazeLayout.render('pickMic');
  }
});

FlowRouter.route('/createLobby/note', {
  name: 'shortNote',
  action() {
    BlazeLayout.render('shortNote');
  }
});

FlowRouter.route('/createLobby/gamertag', {
  name: 'enterGamertag',
  action() {
    BlazeLayout.render('enterGamertag');
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

FlowRouter.route('/insertGame', {
  name: 'insertGame',
  action() {
    BlazeLayout.render('insertGame');
  }
});
