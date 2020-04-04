var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    $('#chats').append(`<div>${message}</div>`);

    $('#chats').bind('click', Friends.toggleStatus());
  }

};