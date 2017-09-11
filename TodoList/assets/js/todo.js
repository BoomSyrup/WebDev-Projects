$("ul").on("click","li",function()
{
  $(this).toggleClass("selected");
})

$("ul").on("click","span",function(event)
{
  $(this).parent().slideUp(500,function()
  {
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type='text']").on("keypress",function(event)
{
  if(event.which === 13)
  {
    $("ul").append("<li><span><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>" + $(this).val() + "</li>");
    $(this).val("");
  }
})

$(".fa-plus").on({
    mouseenter: function () {
      $(this).toggleClass("cross");
      $(this).toggleClass("plus");
    },
    mouseleave: function () {
      $(this).toggleClass("cross");
      $(this).toggleClass("plus");
    }
});

$(".fa-plus").on("click", function()
{
  if($(this).hasClass("cross"))
  {
    $("input[type='text']").slideUp(500);
  }
  else
  {
    $("input[type='text']").slideDown(500);
  }
  $(".fa-plus").toggleClass("cross");
  $(".fa-plus").toggleClass("plus");
});
