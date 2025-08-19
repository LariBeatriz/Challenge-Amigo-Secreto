// Lista de amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  // Verificar se o campo de entrada está vazio
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome); // Adicionar ao array

  input.value = ""; // Limpar campo

  atualizarLista(); // Atualizar lista
}

// Função para atualizar/listar os amigos na tela
function atualizarLista() {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = ""; // Limpa a lista existente

  // Criar <li> para cada amigo
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear um amigo
function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  // Verificar se há amigos na lista
  if (amigos.length === 0) {
    resultado.innerHTML =
      "Não há nenhum amigo na lista. Adicione amigos para sortear.";
    return;
  }

  // Gerar índice um aleatório
  let indice = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[indice];

  // Exibir o resultado
  resultado.innerHTML = `O amigo sorteado é: <strong>${sorteado}</strong>`;
}
