// Seleciona todos os links de navegação da navbar
const links = document.querySelectorAll('.navbar-items a');

// Adiciona um ouvinte de eventos para cada link
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão de rolagem

        // Obtém o id do destino do link
        const targetId = this.getAttribute('href').substring(1); // Remove o '#' do href
        const targetElement = document.getElementById(targetId);

        // Se o link for "Mimos", rola até o rodapé
        if (targetId === 'contador') {
            const footerElement = document.querySelector('footer'); // Seleciona o rodapé
            footerElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Faz com que o rodapé apareça no topo da tela
            });
        } else {
            // Para os outros links, rola suavemente para a seção sem o ajuste de centralização
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Faz com que a seção comece a rolar para o topo
            });
        }
    });
});


// Defina a data de referência (substitua pela sua data específica)
const dataEspecifica = new Date("2023-03-30T00:00:00"); // Data específica para o contador

// Função para atualizar o contador
function atualizarContador() {
    const dataAtual = new Date();
    const diferenca = dataAtual - dataEspecifica; // Diferença em milissegundos

    // Calcule a diferença em dias, horas, minutos e segundos
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualizar os valores de tempo nas caixinhas
    document.getElementById("dias").querySelector(".informacao").innerText = dias;
    document.getElementById("horas").querySelector(".informacao").innerText = horas;
    document.getElementById("minutos").querySelector(".informacao").innerText = minutos;
    document.getElementById("segundos").querySelector(".informacao").innerText = segundos;

    // Para as caixinhas de "meses" e "anos", que têm valores fixos
    document.getElementById("meses").querySelector(".informacao").innerText = meses;
    document.getElementById("anos").querySelector(".informacao").innerText = anos;

    // Tornar as caixinhas visíveis, aplicando a classe 'ativo' diretamente
    document.querySelectorAll('.quadrante').forEach(quadrante => {
        quadrante.classList.add('ativo');
    });
}

// Inicializa o contador e a atualização do tempo
atualizarContador();
setInterval(atualizarContador, 1000); // Atualiza o contador a cada segundo

// Função para mover para a próxima imagem
function moverParaProximaImagem() {
    const containerFotos = document.querySelector('.foto-container');
    containerFotos.scrollBy({ left: 300, behavior: 'smooth' }); // Mover 300px para a direita
}

// Função para voltar para a imagem anterior.
function moverParaImagemAnterior() {
    const containerFotos = document.querySelector('.foto-container');
    containerFotos.scrollBy({ left: -300, behavior: 'smooth' }); // Mover 300px para a esquerda
}