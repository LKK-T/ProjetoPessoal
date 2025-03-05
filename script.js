function calcularDesconto() {
    let nomeProduto = prompt('Qual é o nome do produto?')
    let valorInicial = Number(prompt(`Qual é o preço de ${nomeProduto}?`))
    let desconto = Number(prompt('Qual é a porcentagem de desconto?'))

    let valorDesconto = valorInicial * (desconto / 100)
    let valorFinal = valorInicial - valorDesconto

     alert(`O produto ${nomeProduto}, que custava R$${valorInicial.toFixed(2)}, com desconto de ${desconto}%, vai custar R$${valorFinal.toFixed(2)}!`)

    document.getElementById('resultado').innerText = mensagem 
}
