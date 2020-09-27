baseUrl = "http://localhost:8080/product";

var pagination;
function getAllProducts(){
    $.getJSON(`${baseUrl}/all`, function(data){
        pagination = {
            pageNumber: data.pageable.pageNumber,
            pageSize: data.pageable.pageSize,
        };

    
        data.content.forEach(item => {
            createDom(item);
        });;

        

    });
}
var ctx = "${pageContext.request.contextPath}"


function createDom(item){
    let fotos = item.photo.split(",");
    let divpai = document.createElement("div");
    divpai.className = "col-md-3 col-sm-6";

    let divGrid = document.createElement("div");
    divGrid.className = "product-grid";

    let divImage = document.createElement("div");
    divImage.className = "product-image";

    let image1 = document.createElement("img");
    image1.setAttribute("src",`${fotos[0]}`);
    image1.className = "pic-1";
    

    let image2 = document.createElement("img");
    image2.setAttribute("src",`${fotos.length >= 2 ? fotos[1] : fotos[0]}`);
    image2.className = "pic-2";
    
    let link = document.createElement("a");
    link.setAttribute('href',`detalhes.html?item=${item.id}`);
    
    let ul = document.createElement("ul");
    ul.className = "social";

    let liName = document.createElement("li");

    
    let linkUl = document.createElement("a");
    linkUl.setAttribute('data-tip',"Ver mais");
    linkUl.setAttribute('href',`detalhes.html?item=${item.id}`);

    let iconVerMais = document.createElement("i");
    iconVerMais.className = "fa fa-search";

    let divProductContent = document.createElement("div");
    divProductContent.className = "product-content";

    let title = document.createElement("h3");
    title.className = "title";

    let name = document.createTextNode(`${item.name}`);

    let linkName = document.createElement("a");
    linkName.setAttribute('href',`detalhes.html?item=${item.id}`);
    
    let divPrice = document.createElement("div");
    divPrice.className = "price";

    let preco = document.createTextNode(`${item.saleValue}`);

    let linkCarrinho = document.createElement("a")
    linkCarrinho.setAttribute('href',"carrinho.html");

    let adicionarCarrinho = document.createTextNode("+ Adicionar ao carrinho");

   

    link.appendChild(image1);
    link.appendChild(image2);
    ul.append(liName);
    linkUl.appendChild(iconVerMais);
    liName.appendChild(linkUl);
    divImage.appendChild(link);
    divImage.appendChild(ul);
    divGrid.appendChild(divImage);

    linkName.appendChild(name);
    title.appendChild(linkName);
    divPrice.appendChild(preco);
    linkCarrinho.appendChild(adicionarCarrinho);
    divProductContent.appendChild(title);
    divProductContent.appendChild(divPrice);
    divProductContent.appendChild(linkCarrinho);

    divGrid.appendChild(divProductContent);

    divpai.appendChild(divGrid);
    console.log(divpai);
    $("#produtos").append(divpai);
}