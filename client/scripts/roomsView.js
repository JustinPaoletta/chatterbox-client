var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    $('#rooms select').append(`<option>${roomName}</option>`);
  }

};
