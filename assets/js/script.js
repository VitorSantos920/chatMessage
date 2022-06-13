var messagesUser1 = [];
var messagesUser2 = [];

function messageUser1() {
    let campoTexto = document.getElementById("user1").value; // Conteúdo da Mensagem do User 1
    if(campoTexto != ""){
        let contentMessage = document.getElementsByClassName("contentMessage")[0];
        messagesUser1.push(campoTexto); // Adicionando à array
        let p = document.createElement("p");
        p.classList = "messageUser1";
        p.innerHTML = campoTexto;
        contentMessage.append(p);
        gravarNaMemoria1();
    } else {
        window.alert("Digite uma mensagem!");
    }
}


function messageUser2() {
    let campoTexto = document.getElementById("user2").value; // Conteúdo da Mensagem do User 2
    if(campoTexto != ""){
        let contentMessage = document.getElementsByClassName("contentMessage")[0];
        messagesUser2.push(campoTexto); // Adicionando à array
        let p = document.createElement("p");
        p.classList = "messageUser2"
        p.innerHTML = campoTexto;
        contentMessage.append(p);
        gravarNaMemoria2();
    } else {
        window.alert("Digite uma mensagem!");
    }
}

function mostrarMensagem (){
    let contentMessage = document.getElementsByClassName("contentMessage")[0];
    let p = document.createElement("p");
    contentMessage.append(p);
}

function gravarNaMemoria1(){
    localStorage.setItem("mensagensUser1", JSON.stringify(messagesUser1));
}

function gravarNaMemoria2(){
    localStorage.setItem("mensagensUser2", JSON.stringify(messagesUser2));
}

// function lerNaMemoria() {
//     let contentMessage = document.getElementsByClassName("contentMessage")[0];
//     for (let index = 0; index < messagesUser1.length; index++) {
//         const element = messagesUser1[index];
//         let p = document.createElement("p");
//         p.classList = "messageUser2";
//         p.innerHTML = element;
//         contentMessage.append(p);
//     }
// }