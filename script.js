import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAuPkt23z410tJa5R3OTxKkFYqze5yYM4",
  authDomain: "elaine-e-elvia-1515.firebaseapp.com",
  projectId: "elaine-e-elvia-1515",
  storageBucket: "elaine-e-elvia-1515.firebasestorage.app",
  messagingSenderId: "595280795588",
  appId: "1:595280795588:web:548ca5e0f4fbe8bb96b691"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// NAVEGAÇÃO
window.goToForm = function() {
  showScreen("form");
}

window.openMap = function() {
  window.location.href = "https://maps.app.goo.gl/P8cA7fnnk5QQLzd57?g_st=ac";
}

//  CONFIRMAR PRESENÇA
window.confirmar = async function() {
  let nome = document.getElementById("nome").value.trim();

  if (!nome) {
    alert("Digite seu nome");
    return;
  }

  // padronizar nome
  nome = nome.toLowerCase();
  nome = nome.replace(/\b\w/g, l => l.toUpperCase());

  try {
    await addDoc(collection(db, "confirmacoes"), {
      nome: nome,
      data: new Date()
    });

    document.getElementById("formBox").innerHTML = `
      <h2 style="color:#00ffcc; font-size:22px;">
        Presença confirmada com sucesso!
      </h2>
      <p style="opacity:0.8;">
        Qualquer inquietação, ligar para 923 546 200 ou 925 392 972
         (Melhor salvar!)
      </p>
    `;

  } catch (e) {
    alert("Erro ao salvar");
    console.error(e);
  }
}

// TROCAR TELA
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}