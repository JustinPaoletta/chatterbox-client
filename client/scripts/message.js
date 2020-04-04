class Message {

  constructor (username, roomname, text, createdAt) {
    this.username = username;
    this.roomname = roomname;
    this.text = text;
    this.createdAt = createdAt;
  }

  render() {

    $('#chats').append(`<div>${this.username} : ${this.roomname} : ${this.text} : ${this.createdAt}</div>`);

    $('#chats').bind('click', Friends.toggleStatus());
  }

}