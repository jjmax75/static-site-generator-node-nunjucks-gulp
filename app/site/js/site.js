$('.nav-tabs li a').click(function (e) {
    e.preventDefault();
});

$("#contactForm").submit(function(event) {
  // cancels the form submission
  event.preventDefault();
  submitForm();
});

function submitForm() {
  // Initiate Variables With Form Content
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  $.ajax({
    type: "POST",
    url: "php/process.php",
    data: "name=" + name + "&email=" + email + "&message=" + message,
    success: function(text) {
      if (text === "success") {
        formSuccess();
      } else {
        formError();
      }
    }
  });
}

function formSuccess() {
  $("#msgSubmit").removeClass("hidden");
}

function formError() {
  $("#msgSubmit").html("There was an error!").removeClass("hidden");
}
