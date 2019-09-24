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
const activityElement = '<span></span>'
$('.activities').append(activityElement);
let totalActivityCost = 0;

//Change listener
$('.activities').change( function () {
   const $elementTarget = e.target;
   const $dataCostActivity = $($elementTarget).attr('data-cost');
//Adding cost
    if ($elementTarget.attr('checked') === true) {
       //cost of individual activity
        activityCost =  $dataCostActivity ;
        totalActivityCost += activityCost;
//Taking off cost, subtracting   
    } else {

        totalActivityCost = totalActivityCost - activityCost;
    }

});



