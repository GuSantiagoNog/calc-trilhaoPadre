const pedido = {};
let total = 0;

function adicionarItem(nome, preco) {
  if (!pedido[nome]) {
    pedido[nome] = { quantidade: 0, preco: preco };
  }
  pedido[nome].quantidade++;
  total += preco;
  atualizarTela();
}

function removerItem(nome) {
  if (pedido[nome] && pedido[nome].quantidade > 0) {
    pedido[nome].quantidade--;
    total -= pedido[nome].preco;
    atualizarTela();
  }
}

function atualizarTela() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  for (const item in pedido) {
    if (pedido[item].quantidade > 0) {
      const subtotal = pedido[item].quantidade * pedido[item].preco;
      lista.innerHTML += `
        <p>
          ${pedido[item].quantidade} ${item} - R$${subtotal}
          <button class="remover" onclick="removerItem('${item}')">-</button>
        </p>`;
    }
  }
  document.getElementById('total').innerText = total;
}

function limpar() {
  for (const item in pedido) {
    pedido[item].quantidade = 0;
  }
  total = 0;
  atualizarTela();
}
