//Focuses on first text field when site first loads up
document.getElementById('name').focus();

//Hides the select theme option
$('#other-title').hide();


//Updates color field to read "Please Select a T-shirt theme"
$('#colors-js-puns label').empty();
$('#colors-js-puns label').append("Please select a T-shirt theme");

//Hides the color options from the drop down menu
$('#color option').hide();

//If theme jspuns shirt is seleected then only jspuns color show
$('#design').val('js puns').click(function() {
    $('#color').val('tomato').remove();
    $('#color').val('steelblue').remove();
    $('#color').val('dimgrey').remove();
    $('#color').val('cornflowerblue').show();
    $('#color').val('darkslategrey').show();
    $('#color').val('gold').show();
})
"If statement in jquery."
//While if other shirt theme is selected only that corresponing colors show up as well.