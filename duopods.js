$(function(){
  $("input[type='radio']").click(function(){
    // console.log($("input[type='radio']:checked").val())
   let value = $("input[type='radio']:checked").val()
    $(".product-image").attr('src', value);
  })
})