$(function() {
  $('.container__title-btn span').on('click', function() {
    $(this).toggleClass('fa-plus');
    $(this).toggleClass('fa-minus');
    $('.container__input').fadeToggle('1000');
  });

  $('.container__list').on('click', '.container__item', function() {
    $(this).toggleClass('completed');
  });

  $('.container__input').on('keypress', function(e) {
    if(e.which === 13) {
     var enterText = $(this).val();
     $(this).val('');

     $('.container__list').append(
       '<li class="container__item">' + 
       '<button class="container__btn fa fa-trash"></button>' + enterText + '</li>')
    }
  });

  $('.container__list').on('click', '.container__btn', function() {
    $(this).parent().fadeOut('1000', function() {
      $(this).remove();
    })
  });
});