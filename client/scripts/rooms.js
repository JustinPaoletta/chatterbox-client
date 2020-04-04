var Rooms = {

  add: function() {
    // window.prompt
  },

  render: function(rooms) {
    for (room of rooms) {
      $('select').append(`<option>${room}</option>`);
    }
  },

  filter: function(room) {
    console.log(`${room}`);
    // $(room).addClass('hidden');
  }
};