var Friends = {

  toggleStatus: function() {
    var jelm = $(this);
    var username = jelm.attr("username");
    $( `#chats div[username=${username}]` ).css("font-size", "1.2rem");
    $( `#chats div[username=${username}]` ).css('color', '#47ABCA');
  }


};