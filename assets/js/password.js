$(document).ready(function () {
  // form validation and ajax call

  $("#pass-form").submit(function (evt) {
    var form = $(this);

		evt.preventDefault();
    evt.preventDefault();
    $("#resultS").hide();
    $("#resultE").hide();
    const pass = $("#PASS").val();

    if (pass.length == "") {
      $(".passError").text("Password is required");
      $(".pass").addClass("is-invalid");
    } else {
      $(".pass").removeClass("is-invalid");
    }

    $(".pass").focusin(function () {
      $(".pass").removeClass("is-invalid");
    });
    $(".pass").focusout(function () {
      if ($(this).val() === "") {
        $(".passError").text(" Password is required");
        $(".pass").addClass("is-invalid");
      } else {
        $(".pass").removeClass("is-invalid");
      }
    });


    // check and isert email
    if (
      pass.length != ""
    ) {

      $.ajax({
        type: "POST",
        url: "pass.php",
        data: { pass:pass },
        dataType: "JSON",

        beforeSend: function () {
          // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
          $("#loader-ajax").removeClass("hidden");
        },

        success: function (feedback) {

          if (feedback.status === "success") {
            $("#resultS").html(feedback.message);
            // $('#S_Modal').modal('show');
            $("#resultS").show();
            form.trigger('reset');

          } else if (feedback.status === "error") {
            $("#resultE").html(feedback.message);
            $("#resultE").show();
            form.trigger('reset');

          }

        },

        complete: function () {
          // Set our complete callback, adding the .hidden class and hiding the spinner.
          $("#loader-ajax").addClass("hidden");
        },


      }); /// ajax call add-user
    }
  }); // submit form

});
