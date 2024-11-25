document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Dados de login fictícios
    const validUsername = 'logtrainee';
    const validPassword = 'adm123';

    // Obtém os valores inseridos pelo usuário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Seleciona o elemento de mensagem de erro
    const errorMessage = document.getElementById('errorMessage');

    // Verifica se o nome de usuário e senha estão corretos
    if (username === validUsername && password === validPassword) {
        // Redireciona para outra página
        window.location.href = 'servicos.html';
    } else {
        // Exibe uma mensagem de erro
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
});
