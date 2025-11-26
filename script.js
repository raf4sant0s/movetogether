// -------------------------
// CADASTRO DE USUÁRIO
// -------------------------
if (document.title.includes("Cadastro")) {
    document.querySelector(".botao").addEventListener("click", function (event) {
        event.preventDefault(); // impede recarregar a página

        // pegar valores dos inputs
        const nome = document.getElementById("nomeCompleto").value.trim();
        const email = document.getElementById("emailCadastro").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const senha = document.getElementById("senhaCadastro").value.trim();

        // validações simples
        if (!nome || !email || !cpf || !telefone || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        // pegar usuários já cadastrados
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // verificar se já existe email cadastrado
        const emailExiste = usuarios.some(user => user.email === email);

        if (emailExiste) {
            alert("Este email já está cadastrado!");
            return;
        }

        // criar objeto usuário
        const novoUsuario = {
            nome,
            email,
            cpf,
            telefone,
            senha
        };

        // salvar no localStorage
        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html"; // redireciona
    });
}



// -------------------------
// LOGIN DO USUÁRIO
// -------------------------
if (document.title.includes("Login")) {
    document.querySelector(".botao").addEventListener("click", function (event) {
        event.preventDefault();

        const email = document.getElementById("emailLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value.trim();

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // procura usuário com email e senha corretos
        const usuarioEncontrado = usuarios.find(
            user => user.email === email && user.senha === senha
        );

        if (usuarioEncontrado) {
            alert(`Bem-vindo, ${usuarioEncontrado.nome}!`);
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

            // redirecione para a página que quiser:
            window.location.href = "home.html"; 
        } else {
            alert("Email ou senha incorretos!");
        }
    });
}


//----------Home------------ 



// Efeito de elevar os cards de categoria
document.querySelectorAll('.cat').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Abrir e fechar menu lateral
const menuBtn = document.querySelector('.menu-icones .material-icons:nth-child(2)');
const menuLateral = document.getElementById('menu-lateral');
const overlay = document.getElementById('menu-overlay');

menuBtn.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-aberto');
    overlay.classList.toggle('ativo');
});

// Clicar fora fecha o menu
overlay.addEventListener('click', () => {
    menuLateral.classList.remove('menu-aberto');
    overlay.classList.remove('ativo');
});


//NOTIFICAÇÕES
const btnNotificacoes = document.getElementById('btn-notificacoes');
const notificacaoLateral = document.getElementById('notificacao-lateral');
const overlayNotificacao = document.getElementById('notificacao-overlay');

// Abrir / Fechar painel
btnNotificacoes.addEventListener('click', () => {
    notificacaoLateral.classList.toggle('aberta');
    overlayNotificacao.classList.toggle('ativo');
});

// Clicar fora fecha
overlayNotificacao.addEventListener('click', () => {
    notificacaoLateral.classList.remove('aberta');
    overlayNotificacao.classList.remove('ativo');
});



//CARDS 
// Efeito hover nos cards do feed
document.querySelectorAll('.feed-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = "translateY(-6px)";
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = "translateY(0)";
    });
});



//MOSTRAR MAIS

function mostrarMais() {
    const cardsExtras = document.querySelectorAll(".feed-card.hidden");
    const botao = document.querySelector(".ver-mais");

    // Se ainda existem cards escondidos → mostrar tudo
    if (cardsExtras.length > 0) {
        document.querySelectorAll(".feed-card").forEach(card => {
            card.classList.remove("hidden");
        });
        botao.textContent = "Ver menos -";
    }
    // Se NÃO existem cards escondidos → esconder os extras
    else {
        const todosCards = document.querySelectorAll(".feed-card");

        // mantém apenas os 3 primeiros visíveis
        todosCards.forEach((card, index) => {
            if (index > 2) card.classList.add("hidden");
        });

        botao.textContent = "Ver mais +";
    }
}

