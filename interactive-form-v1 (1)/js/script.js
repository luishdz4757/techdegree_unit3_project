//Focuses on first text field when site first loads up
document.getElementById('name').focus();

//Hides the select theme option
$('#other-title').hide();

$('#title').change (function () {
    if ($('#title').val() === 'other'){
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
})


//Updates color field to read "Please Select a T-shirt theme"
//$('#colors-js-puns label').empty();
//$('#colors-js-puns label').append("Please select a T-shirt theme");

//Hides the color options from the drop down menu
$('#color').hide();
$('#colors-js-puns label').hide();

//If theme jspuns shirt is seleected then only jspuns color show
 $('#design').change ( function ()  { 
    if ($('#design').val() === 'js puns') {
        $('#color').show();
        $('#color-js-puns label').show();
        $("#color option[value='tomato']").hide();
        $("#color option[value='steelblue']").hide();
        $("#color option[value='dimgrey']").hide();
        $("#color option[value='cornflowerblue']").show();
        $("#color option[value='darkslategrey']").show();
        $("#color option[value='gold']").show();
        } else if ($('#design').val() === 'heart js') {
            $('#color').show();
            $('#color-js-puns label').show();
            $("#color option[value='tomato']").show().attr('selected', 'selected');
            $("#color option[value='steelblue']").show();
            $("#color option[value='dimgrey']").show();
            $("#color option[value='cornflowerblue']").hide();
            $("#color option[value='darkslategrey']").hide();
            $("#color option[value='gold']").hide();
    }
});

// Activity Section

//Create element to display total cost and append it to "".activity"
let activityElement = $('<span></span>');
$('.activities').append(activityElement);
let totalActivityCost = 0;

//Change listener
$('.activities').change(  (e) => {
   let elementTarget = $(e.target);
   let dataCostActivity = ($(elementTarget).attr('data-cost').replace(/[$,]+/, ''));
//Adding cost
    if (elementTarget.prop('checked') === true) {
       //cost of individual activity
        activityCost =  parseInt(dataCostActivity);
        totalActivityCost += activityCost;
//Taking off cost, subtracting   
    } else {
        activityCost =  parseInt(dataCostActivity);
        totalActivityCost = totalActivityCost - activityCost;
    }

    activityElement.text('Total: $' + totalActivityCost);
//Date and time conflict
let $dateTime = elementTarget.attr('data-date-and-time');

$('.activities input').each(function (){
  if ($(this).attr('data-day-and-time') === $dateTime && elementTarget != $(this)){
    if ($(elementTarget).is('checked') === true) {
        $(this).attr('disabled') == true;
        $(elementTarget).attr('disabled') === false;
    } else {
        $(this).attr('disabled') === false;
    }

  }

})

});

// Payment section
// Hide Select Payment method
$("#payment option[value='select method']").hide();
$("#payment option[value='Credit Card']").show().attr('selected', 'selected');

//If one payment option is selected the other two are hidden
$('#payment').change (function () {
    if ($('#payment').val() === 'Credit Card') {
        $("#payment option[value='Credit Card']").show();
        $("#payment option[value='Paypal']").hide();
        $("#payment option[value='Bitcoin']").hide();
    } if ($('#payment').val() === 'Paypal') {
        $("#payment option[value='Credit Card']").hide();
        $("#payment option[value='Paypal']").show();
        $("#payment option[value='Bitcoin']").hide();
    } if ($('#payment').val() === 'Bitcoin') {
        $("#payment option[value='Credit Card']").hide();
        $("#payment option[value='Paypal']").hide();
        $("#payment option[value='Bitcoin']").show();
    }
});


//Validation section

//Name validation
function isValidName(name) {
    let userName = $('#name').val();

    if (userName.length === 0 ){
    $('#name').css('border-color', 'red');
    return false;
    } if (/^[a-zA-Z]+$/i.test(userName) === false) {
        $('#name').css('border-color', 'red');
        return false;
    } else {
        $('#name').css('border-color', '#6F9DDC')
        return true;
    }

    //return /^[a-zA-z]+$/.test(name);
}


//Email validation
function isValidEmail(email) {
    let userEmail = $('#mail').val();
    if (userEmail.length === 0) {
    $('#email').css('border-color', 'red');
    return false;
    }  if (/^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmail) === false) {
        $('#mail').css('border-color', 'red');
        return false;
    } else {
        $('#mail').css('border-color', '#6F9DDC')
        return true;
    }
  }

//Activity validation
  function isValidActivity() {
    if (totalActivityCost === 0) {
        return false;
    } else {
        return true;
    }

  }

//If credit card is payment method
if( $('#payment').val() === 'credit card'){

//Credit Card Validation
function isValidCc(creditCard) {
    let userCreditCard = $('#cc-num').val();
    if (userCreditCard.length === 0) {
        $('#cc-num').css('border-color', 'red');
        return false;
    } if (/^\d{13,16}$/i.test(userCreditCard) === false) {
        $('#cc-num').css('border-color', 'red');
        return false;
    } else {
        $('#cc-num').css('border-color', '#6F9DDC');
        return true;
    };
}

//Zip code validation
function isValidZip(zip) {
    let userZip = $('#zip').val();
    if (userZip.length === 0) {
        $('#cc-num').css('border-color', 'red');
        return false;
    } if (/^\d{5}$/i.test(userZip) === false) {
        $('#cc-num').css('border-color', 'red');
        return false;
    } else {
        $('#cc-num').css('border-color', '#6F9DDC');
        return true;
    };
}
//CVV validation
function isValidCCV(cvv) {
        let userCVV = $('#cvv').val();
        if (userCVV.length === 0) {
            $('#cvv').css('border-color', 'red');
            return false;
        } if (/^\d{3}$/i.test(userCVV) === false) {
            $('#ccv').css('border-color', 'red');
            return false;
        } else {
            $('#ccv').css('border-color', '#6F9DDC');
            return true;
        };
    }
}

    

//Submit function

        $('form').submit(function (e) {
            // If payment is by credit card
            if( $('#payment').val() === 'credit card') {
                if (isValidName($('#name').val()) && isValidEmail($('#mail').val()) && isValidActivity() && isValidCc($('#cc-num').val()) && isValidZip($('#zip').val()) && isValidCCV($('#ccv').val())) {
                return true;
            } else {
                e.preventDefault();
                isValidName($('#name').val());
                isValidEmail($('#mail').val());
                isValidActivity();
                isValidCc($('#cc-num'));
                isValidZip($('#zip').val());
                isValidCCV($('#ccv').val());
            } 
        }  else { 
            if (isValidName($('#name').val()) && isValidEmail($('#mail').val()) && isValidActivity()) {
            return true;
            } else {
                e.preventDefault();
                isValidName($('#name').val());
                isValidEmail($('#mail').val());
                isValidActivity();
            }
        }
    });
