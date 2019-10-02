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
    } if (/^[a-zA-z]+$/i.test(userName) === false) {
        $('#name').css('border-color', 'red');
    return false;
    }
    else {
        $('#name').css('border-color', '#6F9DDC')
        return true;
    }

    //return /^[a-zA-z]+$/.test(name);
}

//Email validation
// function isValidEmail(email) {
//     return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
//   }

//Activity validation


//If credit card is payment method
//if( $('#payment').val() == 'credit card')

//Credit Card Validation
// function isValidCc(creditCard) {
//     return /^\d{13,16}$/i.test(creditCard);
// }

//Zip code validation
// function isValidZip(zip) {
//     return /^\d{3}$/i.test(zip);
// }

//CVV validation
// function isValidCVV(cvv) {
//     return /^\d{5}$/i.test(cvv);
// }
