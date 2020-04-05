var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  // let d = new Date();
  // `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`


  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = document.getElementById('message').value;
    //var roomname = documet get roomname

    var formattedMessage = {
      username: App.username,
      roomname: App.room,
      text: message,
    };

    Parse.create(formattedMessage);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};