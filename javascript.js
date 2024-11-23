const paginas = {
    "inicio": "<h1>INÍCIO</h1> <p>Seja bem-vindo ao nosso site!</p>",
    "sobre": "<h1>SOBRE</h1> <p>Somos uma empresa dedicada a fornecer as melhores soluções</p>",
    "servicos": "<h1>SERVIÇOS</h1> <p>Veja nossos serviços!</p>",
    "contatos": "<h1>CONTATOS</h1> <p>Entre em contato conosco para mais informações!</p>"
};

let conteudo = window.document.getElementById('conteudo');

function navegarpara(pagina){
    conteudo.innerHTML = paginas [pagina];
}