async function selectProduto(){
    const produtos = await fetch("http://localhost:3001/produtos")
    const produtosJson = await produtos.json()
    const selecione = document.querySelector("select")
    produtosJson.forEach(element => {
        selecione.insertAdjacentHTML("beforeend",`
        <option value="${element.id}">${element.nome}</option> `)
    });
}
selectProduto()
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    cadastrarVenda()
})
const myHeaders = {
    "Content-Type": "application/json", 
  };
async function cadastrarVenda(){
    const select = document.querySelector("select").value
    const quantidade = document.querySelector("input").value
    const produto = await fetch (`http://localhost:3001/produtos/${select}`)
    const produtoJson = await produto.json()
    console.log(produtoJson)
    const ano = new Date().getFullYear()
    const mes = new Date().getUTCMonth() + 1
    const dia = new Date().getUTCDate()
    const valorVenda = parseInt(quantidade) * parseInt(produtoJson.valor)
    const venda ={
        produto:produtoJson.id,
        dia:dia,
        mês:mes,
        ano:ano,
        valorVenda:valorVenda
    }
    const bodyJson = JSON.stringify(venda)
    const res = await fetch(
        "http://localhost:3001/venda",
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        })
    if (res.status == 201) {
        const resJson = await res.json()
    }
    else{
        console.log("Deu ruim")
    }
}
