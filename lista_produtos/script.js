const myHeaders = {
    "Content-Type": "application/json", 
  };
async function cadastrarProduto() {
    const nome = document.querySelector("#nome")
    const custo = document.querySelector("#custo")
    const valor = document.querySelector("#venda")
    const timestamp = new Date().getTime()
    const produto = {
        nome: nome.value,
        custo: custo.value,
        valor: valor.value,
        id: timestamp
    }
    console.log(produto)
    const bodyJson = JSON.stringify(produto)
    const res = await fetch(
        "http://localhost:3001/produtos",
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
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    cadastrarProduto()
})
