$("button.shopify-payment-button__button.shopify-payment-button__button--unbranded").on("click",function(e){
  e.preventDefault();
  var variantId = $('[name="id"]').find(":selected").val()
  console.log(variantId);
  window.location.href = "/cart/"+variantId+":1";
});