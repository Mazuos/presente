function beijo() {
    var imgPersonagem1 = document.getElementById('imgPersonagem1');
    var imgPersonagem2 = document.getElementById('imgPersonagem2');
    var coracao = document.getElementById('coracao');
    var mensagem = document.getElementById('mensagem');
    var button = document.getElementById('button');
  
    // Deslocar o personagem 2 para a direita
    imgPersonagem1.style.transform = 'translateX(100%)';
    imgPersonagem2.style.transform = 'translateX(-25%)';
  
    // Ocultar o botão adicionando a classe "hide"
    button.classList.add('hide');
  
    // Alterar os assets dos personagens
    imgPersonagem1.src = 'magelado.png';
    imgPersonagem2.src = 'liabj.png';
  
    // Exibir o coração e a mensagem
    coracao.style.display = 'block';
    mensagem.textContent = 'PERDEMO O BV AEEEEEEEEEEE';
  
    // Agendar a remoção do coração e da mensagem após 3 segundos (3000 milissegundos)
    setTimeout(function() {
      coracao.style.display = 'none';
      mensagem.textContent = '';
  
      // Restaurar a posição original do personagem 2
      imgPersonagem1.style.transform = 'translateX(0)';
      imgPersonagem2.style.transform = 'translateX(0)';
  
      // Restaurar os personagens para os assets iniciais após 5 segundos (5000 milissegundos)
        imgPersonagem1.src = 'mage.png';
        imgPersonagem2.src = 'lia.png';
  
        // Exibir o botão removendo a classe "hide"
        button.classList.remove('hide');
      
    }, 2000);
  }
  