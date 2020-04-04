var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('select').change(function () {
      Rooms.filter(this.value);
      // console.log(this.value);
    });
  },

  renderRoom: function(roomName) {
    $('#rooms select').append(`<option>${roomName}</option>`);
  }

};
