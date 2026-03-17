import React, { useState } from 'react';
import './App.css'; // Novo arquivo CSS



interface ItemCarrinho extends Produto {
  quantidade: number;
}
// 1. Definindo os tipos
interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl: string; // Transformamos em obrigatório para o teste
}

// Mock de dados com imagens (Usando o placehold.co para gerar imagens provisórias)
const PRODUTOS_LEAOZINHO: Produto[] = [
  { id: 1, nome: 'Burger Rei Leão', descricao: 'Hambúrguer 200g, bacon crocante, cheddar maçaricado, cebola caramelizada', preco: 32.90, imagemUrl: 'https://placehold.co/150x150/F57C00/FFF?text=Burger' },
  { id: 2, nome: 'Batata Savana', descricao: 'Porção grande com costelinha desfiada e molho barbecue da casa', preco: 24.00, imagemUrl: 'https://placehold.co/150x150/F57C00/FFF?text=Batata' },
  { id: 3, nome: 'Suco Juba Laranja', descricao: 'Suco natural de laranja com acerola 500ml', preco: 14.00, imagemUrl: 'https://placehold.co/150x150/F57C00/FFF?text=Suco' },
  { id: 4, nome: 'Combo Filhote', descricao: 'Cheeseburger simples, batata pequena e suco de caixinha', preco: 28.50, imagemUrl: 'https://placehold.co/150x150/F57C00/FFF?text=Combo' },
];

export default function CardapioLeaozinho() {
  // 2. Estado do carrinho tipado
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  // 3. Função para adicionar ao carrinho
  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho((carrinhoAtual) => {
      const itemJaExiste = carrinhoAtual.find(item => item.id === produto.id);
      
      if (itemJaExiste) {
        // Se já tem no carrinho, aumenta a quantidade
        return carrinhoAtual.map(item => 
          item.id === produto.id 
            ? { ...item, quantidade: item.quantidade + 1 } 
            : item
        );
      }
      
      // Se não tem, adiciona com quantidade 1
      return [...carrinhoAtual, { ...produto, quantidade: 1 }];
    });

  };
  const removerDoCarrinho = (produtoId: number) => {
    setCarrinho((carrinhoAtual) => {
      return carrinhoAtual.map(item => {
        // Se for o item que queremos remover, diminui 1
        if (item.id === produtoId) {
          return { ...item, quantidade: item.quantidade - 1 };
        }
        return item;
      }).filter(item => item.quantidade > 0); // Remove o item do array se a quantidade chegar a 0
    });
  };
  

  // 4. Calculando o total
  const totalPedido = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);

  return (
    <div className="container-geral">
      
      {/* CABEÇALHO DO LEÃOZINHO */}
      <header className="cabecalho-leaozinho">
        <div className="logo-area">
          {/* Aqui você colocaria a logo do leãozinho */}
          <span className="logo-placeholder">🦁</span>
          <h1>Lanchonete O Leãozinho</h1>
        </div>
        <p>O sabor que ruge mais alto!</p>
      </header>

      {/* CONTEÚDO PRINCIPAL (Flexbox) */}
      <div className="layout-principal">
        
        {/* Lado Esquerdo: O Cardápio */}
        <div className="area-cardapio">
          <h2 className="titulo-secao">Nosso Cardápio</h2>
          
          <div className="lista-produtos">
            {PRODUTOS_LEAOZINHO.map((produto) => (
              <div key={produto.id} className="card-produto-leaozinho">
                
                {/* NOVA TAG DE IMAGEM AQUI */}
                <img 
                  src={produto.imagemUrl} 
                  alt={produto.nome} 
                  className="imagem-produto-leaozinho" 
                />

                <div className="info-produto">
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <strong className="preco-produto">R$ {produto.preco.toFixed(2)}</strong>
                </div>
                <button 
                  className="botao-adicionar-leaozinho"
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  Adicionar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Direito: O Carrinho Sticky */}
        <div className="area-carrinho-leaozinho">
          <h2 className="titulo-secao">Seu Pedido</h2>
          
          {carrinho.length === 0 ? (
            <div className="carrinho-vazio">
              <span>🛒</span>
              <p>O carrinho está com fome. Adicione um lanche!</p>
            </div>
          ) : (
            <>
             <ul className="lista-carrinho-leaozinho">
                {carrinho.map((item) => (
                  <li key={item.id} className="item-carrinho-leaozinho">
                    <span className="qtd-item">{item.quantidade}x</span>
                    <span className="nome-item">{item.nome}</span>
                    <span className="preco-item">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                    
                    {/* O botão de remover entra direto aqui, como irmão dos spans */}
                    <button 
                      className="botao-remover-item"
                      onClick={() => removerDoCarrinho(item.id)}
                      title="Remover uma unidade"
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="total-carrinho-leaozinho">
                <strong>Total:</strong>
                <strong className="valor-total">R$ {totalPedido.toFixed(2)}</strong>
              </div>
              
              <button className="botao-finalizar-leaozinho">
                Finalizar Pedido 🦁
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}