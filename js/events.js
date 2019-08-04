function getIt(){
$('p').on("click", function(){
    window.alert("Hey!");
});
}

function frameIt(){
  $('img').on("load", function(){
    $("img").addClass("tasty");
});
}

/* Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key. */

function pressIt(){
  $("input").on("keydown", function(e){
    if (e.which === 71){
      window.alert("G was pressed.");
    }
  });
  
  function 
}