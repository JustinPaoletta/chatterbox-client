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
    let d = this.createdAt;

    let mon = d.slice(5, 7);
    let day = d.slice(8, 10);
    let yr = d.slice(0, 4);
    let time = d.slice(11, 19);

    let formated = `${mon}/${day}/${yr} - ${time}`; //"04/04/2020 - 00:50:53"
    console.log(JSON.stringify(this));

    $('#chats').prepend(`<div roomname=${this.roomname} username=${this.username} class='chat'"><p> <span class="${this.username}" onclick="change();"> ${this.username}</span> : ${this.roomname}</p><br><p>${this.text} : ${formated}</p></div>`);

    $('#chats div').on('click', Friends.toggleStatus);

  }

}