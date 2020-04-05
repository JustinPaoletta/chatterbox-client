var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#chats div').bind('click', Friends.toggleStatus());
  },

  renderMessage: function(message) {
    $('#chats').prepend(`<div>${message}</div>`);
  }

};