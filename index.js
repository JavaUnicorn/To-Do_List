var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendSomeoneAwesome);
function appendSomeoneAwesome() {
  var name = $('.name').val();

  cardContainer.append(`
    <p class="name-card">${name} is awesome!</p>
  `);

   $('.name').val("");

}
