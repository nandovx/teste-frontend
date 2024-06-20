async function submitForm(nome, email, senha, confirmacaoSenha) {
    const data = { nome, email, senha, confirmacaoSenha };

    try {
        const response = await fetch('http://localhost:8080', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'ECA1AB4CE8583613A2C759B445E98'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            return !result.erro;
        } else {
            const result = await response.json();
            console.error('Erro na resposta da API:', result);
            return false;
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        return false;
    }
}
