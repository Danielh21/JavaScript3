$(function () {
    /*
     * 1. Create 3 divs next to each other in the HTML page
     a. Give them a height and width of 100px and different background colors.
     b. Hide the first div when it is clicked.
     c. Change the border size to 4 of the second div when it is hovered.
     d. Change font size on the third when the second one is being clicked.
     */


    $("#firstdiv").on("click", function () {
        $(this).hide();
    });
    $("#seconddiv").hover(
            function () {
                $(this).css({
                    "border-style": "solid",
                    "border-width": "4px"
                });
            });

    $("#thriddiv").on("click", function () {
        $(this).css("font-size", "200%");
    });


    /*
     * 2. Create 9 divs (3x3) and give each a number inside
     a. Iterate over the div element and add click event handlers
     b. When a div is clicked its value should change to its value to the power of 2.
     */
    $(".numrow").on("click", function () {
        var text = $(this).text();
        var number = parseInt(text);
        number = number * number;
        $(this).text(number + "");
    });


    /*
     *  3. Create a list (UL) in html with 10 list items <br>
     a. Using filters in jquery change the background color of each second list item to be light grey.<br>
     b. Iterate over the items and increase the font size on each item progressively.
     */
    var itemsinList = document.getElementById("ullist").getElementsByTagName("li");
    $(itemsinList).filter(function (index) {
        return index % 2 === 0;
    }).css("background-color", "gray");


    $(itemsinList).each(function (index, element) {
        var fontsize = $(this).css('font-size');
        var num = parseInt(fontsize);
        var newNum = num + index;
        $(this).css("font-size", newNum + "px");
    });

    /*
     * 4. Create an html page with 10 small pictures next to each other
     a. Create a function that will swap the pictures around
     b. Apply the function whenever an image is clicked
     */

    var selcted = null;
    var imgs = document.getElementById("picdiv").getElementsByTagName("img");

    $(imgs).each(function () {
        $(this).on("click", function () {
            if (selcted === null) {
                //Set selected to this
                selcted = $(this);
                $(this).css("border", "solid");
                $(this).css("border-color", "green");
            }
            else {
                //Do the swap!
                var beforeSelected = $(selcted).prev("img").get(0);
//            $(closestToSelcted).css("border","solid");
//            $(closestToSelcted).css("border-color","red");

                $(this).after($(selcted));
                $(beforeSelected).after($(this));
                $(selcted).css("border", "");
                $(selcted).css("border-color", "");
                if (beforeSelected === this) {
                    $(this).before($(selcted));
                }
                selcted = null;
            }
        });
    });



    /*
     * 5. Create a form with input fields for user registration
     a. Using jquery check that all input fields have been filled out
     b. If not insert a message in red writing inside the input field that was not filled.
     c. Make sure the submit button is disabled as long as not all fields are filled.
     */

    $("#subbutton").on("click", function () {
        checkIfEmp();
    });



    function checkIfEmp() {
        $("#formid").find(":text").each(function () {
            if ($(this).val().length === 0) {
                $(this).val("Put Something Here!");
                $(this).css("color", "red");
            }
        });
    }


    $("#subbutton").prop("disabled", true); // since its default is "" then I disabled the button!

    $("#formid").find(":text").each(function () {

        $(this).on("change", function () {
            if ($(this).val().length === 0) {
                $("#subbutton").prop("disabled", true);
            }
            else {
                $("#subbutton").prop("disabled", false);
            }

        });
    });

    /*
     * 6. Take an array of person objects and iterate over them.
     a. Insert all attributes of each object in a table that you create with jquery.
     b. Make an eventhandler for mouseover event on each table row, so that when hovering over a person object the text becomes bold and italic.
     */

//Create Array of Persons

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;

    var p1 = new Person("Hans", 2);
    var p2 = new Person("Grete", 4);
    var p3 = new Person("Jørgen", 72);

    var persons = [p1, p2, p3];
    
    setUpTable();
    
    function setUpTable() {

        $(persons).each(function () {
            var tr = "<tr>";
            tr += "<td>" + $(this).attr("name") + "</td>";
            tr += "<td>" + $(this).attr("age") + "</td><tr>";
            $("#tbody").append(tr);

        });
        
        var elementsInTable = document.getElementById("tableid").getElementsByTagName("tr");
        
       $(elementsInTable).each(function(){
          $(this).hover( function(){ // over function
              $(this).css("font-weight", "bold");
              $(this).css("font-style", "italic");
          }, 
          function(){ //Leave function
              $(this).css("font-weight", "");
              $(this).css("font-style", "");
          }); 
       }); 
    }




});

