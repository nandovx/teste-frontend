document.getElementById('registrationForm').addEventListener('submit', async function(event){
    event.preventDefault();

    const formularioData = new FormData(event.target);
    const data = {
        nome: formularioData.get('nome'),
        email: formularioData.get('email'),
        senha: formularioData.get('senha'),
        confirmacaoSenha: formularioData.get('confirmacaoSenha')
    };

    try{
        const response = await fetch('http://localhost:8080', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key' : 'ECA1AB4CE8583613A2C759B445E98'
            },
            body: JSON.stringify(data),

        });
        const result = await response.json();
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
});