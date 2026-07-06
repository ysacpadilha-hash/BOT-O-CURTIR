// 1. EVENTOS EM MÚLTIPLOS ELEMENTOS
// Selecionamos todos os botões de curtir da página de uma só vez
const botoesCurtir = document.querySelectorAll('.btn-like');

// Percorremos cada botão encontrado usando o laço forEach
botoesCurtir.forEach((botao) => {
    
    // Adicionamos um "ouvinte" de clique para cada botão individualmente
    botao.addEventListener('click', function() {
        
        // A partir do botão clicado (this), subimos até o container de ações (.card-actions)
        const containerAcoes = this.parentElement;
        
        // Agora, localizamos o contador específico que está dentro desse mesmo container
        const elementoContador = containerAcoes.querySelector('.like-counter');
        
        // Pegamos o número atual de curtidas (convertendo o texto para número inteiro)
        let curtidasAtuais = parseInt(elementoContador.textContent);

        // 2. LÓGICA DE CURTIDAS (Sistema de Toggle/Alternância)
        if (this.classList.contains('liked')) {
            // Se o botão já tem a classe 'liked', significa que o usuário quer "descurtir"
            this.classList.remove('liked');
            this.textContent = '❤️ Curtir';
            curtidasAtuais--; // Subtrai 1 do contador
        } else {
            // Se não tem a classe, o usuário está curtindo o card
            this.classList.add('liked');
            this.textContent = '💚 Curtido';
            curtidasAtuais++; // Soma 1 ao contador
        }

        // 3. ATUALIZAÇÃO DO CONTADOR NA TELA
        elementoContador.textContent = curtidasAtuais;
    });
});