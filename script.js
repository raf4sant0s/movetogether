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

