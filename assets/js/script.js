'use strict';
const iptMsgUser1 = document.getElementById('ipt-content-msg--user-1');
const sendMSgUser1 = document.querySelector('.send-msg--user-1');
const iptMsgUser2 = document.getElementById('ipt-content-msg--user-2');
const sendMSgUser2 = document.querySelector('.send-msg--user-2');
const chat = document.querySelector('.messages--chat');
let messages = [];

function keyPress(k, user) {
    if (k.key === 'Enter') {
        if (user == 1) {
            message(1, iptMsgUser1.value, 'content-message--user-1');
            iptMsgUser1.value = '';
        } else {
            message(2, iptMsgUser2.value, 'content-message--user-2');
            iptMsgUser2.value = '';
        }
    }
}

function identifyUser(user) {
    if (user == 1) {
        message(1, iptMsgUser1.value, 'content-message--user-1');
        iptMsgUser1.value = '';
    } else {
        message(2, iptMsgUser2.value, 'content-message--user-2');
        iptMsgUser2.value = '';
    }
}

function message(user, contentMsg, classP) {
    let p = document.createElement('p');
    p.innerHTML = contentMsg;
    p.classList.add(classP);
    messages.push({
        user: user,
        msg: contentMsg,
    });
    localStorage.setItem('messages', JSON.stringify(messages));
    chat.append(p);
}

let userMessages = JSON.parse(localStorage.getItem('messages')) || [];
let classP;
for (let i = 0; i < userMessages.length; i++) {
    userMessages[i].user == 1
        ? (classP = 'content-message--user-1')
        : (classP = 'content-message--user-2');
    message(userMessages[i].user, userMessages[i].msg, classP);
}

[iptMsgUser1, iptMsgUser2].map((element) => {
    element.addEventListener('input', (e) => {
        element.classList.toggle('active');
    });
});
