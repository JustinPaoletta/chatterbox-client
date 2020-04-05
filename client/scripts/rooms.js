var Rooms = {

  add: function() {
    console.log("Add button clicked");
    // App.roomname = prompt("Enter a new room name");
    // prompt("Enter a new room name");
    console.log(App.room);
    this.filter(App.room);
    // addRoom();
  },

  render: function(rooms) {
    for (room of rooms) {
      $('select').append(`<option>${room}</option>`);
    }
  },

  filter: function(room) {
    console.log(room);
    $( `#chats div[roomname!=${room}]` ).addClass('hidden');
    $( `#chats div[roomname=${room}]` ).removeClass('hidden');

  }
};