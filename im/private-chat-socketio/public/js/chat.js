const socket = io();
socket.on('connect', () => {
  socket.emit('online', query.sender);
});
socket.on('reply_private_chat', replyPrivateMessage);

const chatHeaderCenter = document.getElementById('chatHeaderCenter');
const inputText = document.getElementById('inputText');
const sendBtn = document.getElementById('sendBtn');
chatHeaderCenter.innerText = query.receiver;
sendBtn.onclick = sendMsg;
inputText.onkeydown = sendMsgByEnter;

function sendMsg() {
  const value = inputText.value;

  if (!value) {
    return alert('Message is required!');
  }
  const message = {
    sender: query.sender,
    receiver: query.receiver,
    text: value,
  };

  socket.emit('private_chat', message, data => {
    renderMessage(data, true);
  });
  inputText.value = '';
}

function replyPrivateMessage(data) {
  renderMessage(data, false);
}

function sendMsgByEnter(event) {
  if (event.keyCode === 13) {
    sendMsg();
  }
}

function renderMessage (data, isSender) {
  const chatContent = document.getElementById('chatContent');
  const chatMainDiv = document.createElement('div');
  const chatUserDiv = document.createElement('div');
  const chatTextDiv = document.createElement('div');
  const chatUserImg = document.createElement('img');
  const chatUserCite = document.createElement('cite');
  const chatUserCiteI = document.createElement('i');

  chatMainDiv.className = 'chat-main';
  chatUserDiv.className = 'chat-user';
  chatTextDiv.className = 'chat-text';

  let username = data.sender;
  let photo = data.senderPhoto;
  let photoNickname = data.senderPhotoNickname;
  if (isSender) {
    chatMainDiv.classList.add('chat-mine');
  }

  chatUserImg.src = photo;
  chatUserCiteI.innerText = data.createTime;
  chatTextDiv.innerText = data.text;

  if (isSender) {
    chatUserCite.append(chatUserCiteI);
    chatUserCite.append(username);
  } else {
    chatUserCite.append(username);
    chatUserCite.append(chatUserCiteI);
  }

  if (photoNickname) {
    const chatPhotoNickName = document.createElement('span');
    chatPhotoNickName.className = 'text-photo';
    chatPhotoNickName.innerText = photoNickname;
    chatUserDiv.append(chatPhotoNickName);
  } else {
    chatUserDiv.append(chatUserImg);
  }

  chatUserDiv.append(chatUserCite);
  chatMainDiv.append(chatUserDiv);
  chatMainDiv.append(chatTextDiv);
  chatContent.append(chatMainDiv);

  chatContent.scrollTop = chatContent.scrollHeight; // 设置聊天区域的滚动条为最新内容的位置
}