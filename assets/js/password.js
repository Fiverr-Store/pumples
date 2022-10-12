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

    //white list form
    $("#white-form").submit(function (evt) {
      var form = $(this);

      evt.preventDefault();
      evt.preventDefault();
      $("#resultwS").hide();
      $("#resultwE").hide();
      const white = $("#WHITE").val();

      if (white.length == "") {
        $(".whiteError").text("Wallet is required");
        $(".white").addClass("is-invalid");
      } else {
        $(".white").removeClass("is-invalid");
      }

      $(".white").focusin(function () {
        $(".white").removeClass("is-invalid");
      });
      $(".white").focusout(function () {
        if ($(this).val() === "") {
          $(".whiteError").text(" Wallet is required");
          $(".white").addClass("is-invalid");
        } else {
          $(".white").removeClass("is-invalid");
        }
      });


      // check and isert email
      if (
        white.length != ""
      ) {

        $.ajax({
          type: "POST",
          url: "white.php",
          data: { white:white },
          dataType: "JSON",

          beforeSend: function () {
            // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
            $("#loader-ajax").removeClass("hidden");
          },

          success: function (feedback) {

            if (feedback.status === "success") {
              $("#resultwS").html(feedback.message);
              // $('#S_Modal').modal('show');
              $("#resultwS").show();
              form.trigger('reset');

            } else if (feedback.status === "error") {
              $("#resultwE").html(feedback.message);
              $("#resultwE").show();
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
