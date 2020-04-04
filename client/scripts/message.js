class Message {

  constructor (username, roomname, text, createdAt = null) {
    this.username = username;
    this.roomname = roomname;
    this.text = text;
    this.createdAt = createdAt;
    console.log(createdAt);
  }

  initialize() {
    console.log('This file was loaded');
  }

  render() {
    console.log(JSON.stringify(this));

    $('#chats').prepend(`<div>${this.username} : ${this.roomname} : ${this.text} : ${this.createdAt}</div>`);

    $('#chats').bind('click', Friends.toggleStatus());
  }

}