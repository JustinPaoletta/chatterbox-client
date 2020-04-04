var Messages = {

  dataHandler: function(messages) {
    messages.results.forEach((message) => {
      var username = sanitizeHtml(message.username);
      var text = sanitizeHtml(message.text);
      var roomname = sanitizeHtml(message.roomname);
      var createdAt = sanitizeHtml(message.createdAt);

      var newMessage = new Message(username, text, roomname, createdAt);
      newMessage.render();
      // console.log(username, text, roomname, createdAt)
    });
  }
};




