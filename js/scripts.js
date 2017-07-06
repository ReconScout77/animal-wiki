$(document).ready(function() {
  $("#select").submit(function(event) {
    var input = $("input:radio[name=animal]:checked").val();


    if (input === "RedPanda") {
      $("#pandaInfo").show();
    } else if (input === "Axolotl") {
      $("#axolotlInfo").show();
    } else if (input === "Narwhal") {
      $("#narwhalInfo").show();
    }
    
    event.preventDefault();
  });
});
