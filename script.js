function Cadastro(event) {
    event.preventDefault();

    let email = document.getElementById('email');
    let senha = document.getElementById('senha');
    let senha2 = document.getElementById('senha2'); // Adicionando o campo senha2
    let alertDiv = document.getElementById('alert');
    let message_type = document.getElementById('message_type');
    let message = document.getElementById('message');

    if (email.value !== '' && senha.value !== '' && senha.value === senha2.value) {
        alert('Cadastro realizado com sucesso!');
        window.location.reload();
    } else {
        if (email.value == '') {
            message_type.innerText = 'Erro:';
            message.innerText = 'Você precisa inserir seu email para realizar o cadastro.';
            alertDiv.style.display = 'block';
        } else if (senha.value == '') {
            message_type.innerText = 'Erro:';
            message.innerText = 'Você precisa inserir uma senha para realizar o cadastro.';
            alertDiv.style.display = 'block';
        } else if (senha.value !== senha2.value) {
            message_type.innerText = 'Erro:';
            message.innerText = 'As senhas não são iguais.';
            alertDiv.style.display = 'block';
        }

        setTimeout(() => {
            closeMessage();
        }, 4000);
    }
}

function closeMessage() {
    let alertDiv = document.getElementById('alert');
    alertDiv.style.display = 'none';
}
