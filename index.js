var cardContainer = $('.card-container');
var submit = $('.submit-btn');


// delete.on("click", deleteTask);
// function deleteTask() {
// $('.cardContainer').val("");
// }
$("button").click(function)(){
  $("section").remove(":contains('card-container')");});
}

  // editButton.onclick=editTask;
  // 			//Bind deleteTask to delete button.
  // 			deleteButton.onclick=deleteTask;



submit.on("click", appendSomeoneAwesome);
function appendSomeoneAwesome() {
  var name = $('.name').val();

  cardContainer.append(`
    <p class="name-card">${name}</p>
  `);
localStorage.setItem("Event", `.name`);
   $('.name').val("");

}
