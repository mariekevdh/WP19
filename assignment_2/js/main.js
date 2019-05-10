function validateForm(){
    var validationCheck = 0;
    var alpharegexp = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
    var numregexp = new RegExp(/^\d+$/);
    var emailregexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var formalert = $("#form-alert");
    formalert.text("");

        if(alpharegexp.test($("input#name").val())) {
        validationCheck += 1;
    } else {
        formalert.append("Please enter a valid name<br />");
    }

    if(numregexp.test($("input#age").val())) {
        validationCheck += 1;
    } else {
        formalert.append("Please enter a valid age<br />");
    }

    if(alpharegexp.test($("input#city").val())) {
        validationCheck += 1;
    } else {
        formalert.append("Please enter a valid city name<br />");
    }

    if(emailregexp.test($("input#email").val())) {
        validationCheck += 1;
    } else {
        formalert.append("Please enter a valid e-mail address<br />");
    }

    if(numregexp.test($("input#nr").val())) {
        validationCheck += 1;
    } else {
        formalert.append("Please enter a valid phone number<br />");
    }

    if(validationCheck === 5) {
        formalert.hide();
        return true;
    } else {
        formalert.show();
        return false;
    }
}

function writeFormData(){
    var formData = {
        inputName : $("input#name").val(),
        inputAge : $("input#age").val(),
        inputCity : $("input#city").val(),
        inputEmail : $("input#email").val(),
        inputNr : $("input#nr").val()
    };

    $("td#name").text(formData.inputName);
    $("td#age").text(formData.inputAge);
    $("td#city").text(formData.inputCity);
    $("td#email").text(formData.inputEmail);
    $("td#nr").text(formData.inputNr);
}

$(function() {
    $( "#submit" ).click(function() {
        if(validateForm()) {
            writeFormData();
            $("div#form-content").show();
        }
    });
    $( "#erase" ).click(function() {
        $("div#form-content").hide();
        $("div#form-alert").hide();
        $(":input").val("")
    });
    $( "#link-tab" ).click(function() {
        $(".tab-pane#links").show();
        $(".tab-pane#contact").hide();
    });
    $( "#contact-tab" ).click(function() {
        $(".tab-pane#contact").show();
        $(".tab-pane#links").hide();
    });
});