var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('select').change(function () {
      Rooms.filter(this.value);
    });

    $('button').bind('click', Rooms.add());
  },

  renderRoom: function(roomName) {
    $('#rooms select').append(`<option>${roomName}</option>`);
  }

};
