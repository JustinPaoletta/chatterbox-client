var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();



    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //EVENT HANDLER
    $('.button').bind('click', Rooms.add());
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data); /// RESULTS
      Messages.dataHandler(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
