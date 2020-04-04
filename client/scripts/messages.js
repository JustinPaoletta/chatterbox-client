var Messages = {

  dataHandler: function(messages) {
    var rooms = new Set();
    messages.results.forEach((message) => {
      var username = sanitizeHtml(message.username);
      var text = sanitizeHtml(message.text);
      var roomname = JSON.stringify(message.roomname) || 'default';
      roomname = roomname.replace(/[{()}]/g, '');
      var createdAt = sanitizeHtml(message.createdAt);

      rooms.add(roomname);
      var newMessage = new Message(username, text, roomname, createdAt);
      newMessage.render();
    });
    Rooms.render(rooms);
    console.log(rooms);
  }
};




