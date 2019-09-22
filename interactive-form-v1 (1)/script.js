//Focuses on first text field when site first loads up
document.getElementById('name').focus();

//Hides the select theme option
$('#other-title').hide();

$('#title').change ( () => {
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
$('#colors-js-puns label');

//If theme jspuns shirt is seleected then only jspuns color show
 if ($('#design').val() === 'js puns') {
 $('#color').show();
 $('#color-js-puns label').show();
 $("#color option[value='tomato']").hide();
 $("#color' option[value='steelblue']").hide();
 $("#color' option[value='dimgrey']").hide();
 $("#color' option[value='cornflowerblue']").show();
 $("#color' option[value='darkslategrey']").show();
 $("#color' option[value='gold']").show();
 
 //While if other shirt theme is selected only that corresponing colors show up as well.
 } else if ('#design').val() === 'heart js' {
 $('#color').val('tomato').show();
 $('#color').val('steelblue').show();
 $('#color').val('dimgrey').show();
 $('#color').val('cornflowerblue').hide();
 $('#color').val('darkslategrey').hide();
 $('#color').val('gold').hide();
 }

