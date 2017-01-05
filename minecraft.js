var Minecraft = {};
Minecraft.selectedTool = "";
Minecraft.selectedDiv = "";
Minecraft.init = function(){
  $(document).ready(function(){
        Minecraft.start();
  });
};

Minecraft.init();

Minecraft.start = function(){
    var main = $(".container");
    var tool = $(".toolBox");


//creating tool box divs
    var axe = $("<div id='axe' class='tool tree leaf'></div>");
    axe.click(Minecraft.clickedTool);

    var shovel = $("<div id='shovel' class='tool dirt grass'></div>");
    shovel.click(Minecraft.clickedTool);

    var pickaxe = $("<div id='pickaxe' class='tool brick'></div>");
    pickaxe.click(Minecraft.clickedTool);

    var selectedBrick = $("<div id='selectedBrick'></div>");
    selectedBrick.click(Minecraft.copyPaste);




    tool.append(pickaxe);
    tool.append(shovel);
    tool.append(axe);
    tool.append(selectedBrick);
    var rowArray = [];

    //creating the grid



    console.log(rowArray);

// creating the world in matrix gilads example
var world = [   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0],

                [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,2,2,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],

                [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
                [0,0,0,2,2,2,0,0,0,0,0,0,0,4,4,0,3,0,0,4],
                [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
                [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                
                [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
]

var blocks = ["sky","cloud","leaf","tree","rock","grass","dirt"];

    for (var i = 0; i < 20; i++) {
        var row = $("<div class='row'></div>");
        rowArray[i] = Array(20);
        main.append(row);
        for (var j = 0; j < 20; j++) {
            var box = rowArray[i][j] = $("<div class='box'></div>");
            box.data("row", i);
            box.data("column", j);
            box.attr("id", i + "-" + j); //gives each on at id
            box.click(Minecraft.pickedDiv);
            box.addClass(blocks[world[i][j]]);
            row.append(box);
        }
    }



// // this function is the tool selector and updator
Minecraft.clickedTool = function () {
    if (Minecraft.selectedTool === "") {
        Minecraft.selectedTool = $(this);
        console.log(Minecraft.selectedTool);
        $(this).addClass("clicked");
    }
   else if (Minecraft.selectedTool !== "") {
       Minecraft.selectedTool.removeClass("clicked");
        Minecraft.selectedTool = "";
        Minecraft.selectedTool = $(this);
        console.log(Minecraft.selectedTool);
        $(this).css("background-color", "blue");
    }
}


Minecraft.pickedDiv =function () {
    if (Minecraft.selectedTool === "") {
        return;
    }
    else if (Minecraft.selectedTool !== "") {
        Minecraft.selectedDiv = $(this);
        //alert(Minecraft.selectedDiv.classList);
        //alert(Minecraft.selectedTool.classList);
        console.log(Minecraft.selectedDiv.attr("class"));
        console.log(Minecraft.selectedTool.attr("id"));
        //tree and leaf for axe
         //is means everything you ask, you dont need to say class or id
        if (Minecraft.selectedDiv.is(".tree") && Minecraft.selectedTool.is("#axe")){
            Minecraft.selectedDiv.removeClass("tree");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("tree");

        } 

        if (Minecraft.selectedDiv.is(".leaf") && Minecraft.selectedTool.is("#axe")){
            Minecraft.selectedDiv.removeClass("leaf");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("leaf");
            //not sure but think that its not showing in the selected brick div because its a gif
        }

        if (Minecraft.selectedDiv.is(".rock") && Minecraft.selectedTool.is("#pickaxe")){
            Minecraft.selectedDiv.removeClass("rock");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("rock");
        }

        if (Minecraft.selectedDiv.is(".dirt") && Minecraft.selectedTool.is("#shovel")){
            Minecraft.selectedDiv.removeClass("dirt");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("dirt");

        } 

        if (Minecraft.selectedDiv.is(".grass") && Minecraft.selectedTool.is("#shovel"))  {
            Minecraft.selectedDiv.removeClass("grass");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("grass");

        }

        if(Minecraft.selectedDiv.classList == Minecraft.selectedTool.classList){
            $("#selectedBrick").css("background-color", "red");
            return;
        }
        }
}

//now wana use the selected brick, make selected brick a namespace?

// Minecraft.copyPaste = function(e){

// //want to select the tool with the id of the string, not just the string, previously wrapped it with a dollar sign, so it is already a jquery object 
// Minecraft.selectedTool.css("background-color","black");
// Minecraft.selectedTool = "";

// }

// $(."selected").removeClass("selected");
// $(this).addClass("selected");


}








