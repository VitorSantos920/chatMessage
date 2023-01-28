const iptMsgUser1: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("ipt-content-msg--user-1")
);

const sendMSgUser1: HTMLImageElement = <HTMLImageElement>(
  document.querySelector(".send-msg--user-1")
);

const iptMsgUser2: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("ipt-content-msg--user-2")
);

const sendMSgUser2: HTMLImageElement = <HTMLImageElement>(
  document.querySelector(".send-msg--user-2")
);

const chat: HTMLElement = <HTMLElement>(
  document.querySelector(".messages--chat")
);

let messages: object[] = [];

function keyPress(k: any, user: number): void {
  if (k.key === "Enter") {
    if (user == 1) {
      message(1, iptMsgUser1.value, "content-message--user-1");
      iptMsgUser1.value = "";
    } else {
      message(2, iptMsgUser2.value, "content-message--user-2");
      iptMsgUser2.value = "";
    }
  }
}

function identifyUser(user: number): void {
  if (user == 1) {
    message(1, iptMsgUser1.value, "content-message--user-1");
    iptMsgUser1.value = "";
  } else {
    message(2, iptMsgUser2.value, "content-message--user-2");
    iptMsgUser2.value = "";
  }
}

function message(user: number, contentMsg: string, classP: string): void {
  let p = document.createElement("p");
  p.innerHTML = contentMsg;
  p.classList.add(classP);

  messages.push({
    user: user,
    msg: contentMsg,
  });

  localStorage.setItem("messages", JSON.stringify(messages));

  chat.append(p);
}

let userMessages: any[] =
  JSON.parse(<string>localStorage.getItem("messages")) || [];

let classP;

for (let i = 0; i < userMessages.length; i++) {
  userMessages[i].user == 1
    ? (classP = "content-message--user-1")
    : (classP = "content-message--user-2");
  message(userMessages[i].user, userMessages[i].msg, classP);
}
