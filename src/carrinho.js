if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  var totalAmount = "0,00"
  
  function ready() {
    // Botão remover produto
    const removeCartProductButtons = document.getElementsByName('buttonRemove')
    for (var i = 0; i < removeCartProductButtons.length; i++) {
      removeCartProductButtons[i].addEventListener("click", removeProduct)
    }
  
    // Mudança valor dos inputs
    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantityInputs.length; i++) {
      quantityInputs[i].addEventListener("change", checkIfInputIsNull)
    }
  
    // Botão add produto ao carrinho
    
  
    // Botão comprar
    const purchaseButton = document.getElementsByClassName("purchase-button")[0]
    purchaseButton.addEventListener("click", makePurchase)
  }
  
  function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  }
  
  function checkIfInputIsNull(event) {
    if (event.target.value === "0") {
      event.target.parentElement.parentElement.remove()
    }
  
    updateTotal()
  }

  
  // Verifique se há produtos salvos no carrinho no local storage
const savedProductsJSON = localStorage.getItem('cartProducts');
if (savedProductsJSON) {
    // Converta os dados JSON salvos de volta para um array de objetos JavaScript
    const savedProducts = JSON.parse(savedProductsJSON);

    // Iterar sobre cada produto salvo e criar elementos do carrinho com base nos dados salvos
    savedProducts.forEach(savedProduct => {
        const newCartProduct = document.createElement("tr");
        newCartProduct.classList.add("cart-product");

        newCartProduct.innerHTML = `
            <td class="flex items-center product-identification">
                <img src="${savedProduct.image}" alt="${savedProduct.name}" class="w-[150px] h-[100px] cart-product-image">
                <strong class="ml-4 text-xs">${savedProduct.name}</strong>
            </td>
            <td>
                <span class="cart-product-price font-robo font-semibold text-blue-600 ml-4">${savedProduct.price}</span>
            </td>
            <td>
                <input type="number" value="1" min="0" class="w-12 h-7 rounded-md border-2 mobile:m-auto border-blue-700 text-center text-black font-semibold product-qtd-input mobile:flex mobile:justify-end mobile:items-end mobile:text-start mobile:py-1">
                <button type="button" name='buttonRemove' class="ml-3 rounded-md bg-red-700 py-1 px-2 mr-1 hover:bg-red-800 remove-product-button">Remover</button>
            </td>
        `;

        // Adicione os elementos do carrinho à tabela
        const tableBody = document.querySelector(".tabela");
        tableBody.append(newCartProduct);

        // Atualize o total (se necessário)
        updateTotal();

        newCartProduct.querySelector('[name="buttonRemove"]').addEventListener("click", removeProduct);
        newCartProduct.querySelector(".product-qtd-input").addEventListener("change", checkIfInputIsNull);
    });
}
  
  function makePurchase() {
    if (totalAmount === "0,00") {
      alert("Seu carrinho está vazio!")
    } else {   
      alert(
        `
          Obrigado pela sua compra!
          Valor do pedido: R$${totalAmount}\n
          Volte sempre :)
        `
      )
  
      document.querySelector(".cart-table tbody").innerHTML = ""
      updateTotal()
    }
  }
  
  // Atualizar o valor total do carrinho
  function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product");
    totalAmount = 0; // Alteração aqui para referenciar a variável global

    for (var i = 0; i < cartProducts.length; i++) {
        const productPriceText = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText;
        // Converta o preço do produto de texto para um número
        const productPrice = parseFloat(productPriceText.replace("R$", "").replace(",", "."));
        const productQuantity = parseInt(cartProducts[i].getElementsByClassName("product-qtd-input")[0].value);

        // Verifique se o preço e a quantidade são válidos antes de calcular o total
        if (!isNaN(productPrice) && !isNaN(productQuantity)) {
            totalAmount += productPrice * productQuantity;
        }
    }

    totalAmount = totalAmount.toFixed(2).replace(".", ",");
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount;
}