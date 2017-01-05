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

    tool.append(pickaxe);
    tool.append(shovel);
    tool.append(axe);
    tool.append(selectedBrick);
    var rowArray = [];

    //creating the grid
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
            row.append(box);
        }
    }


    console.log(rowArray);

//creating the world in matrix gilads example
// var world = {{0,0,0,0,0,0,0,0},
//              {0,0,0,0,1,1,0,0},
//              {0,0,0,0,1,1,1,1},
//              {0,0,0,0,0,0,2,2},
// }
//
// var blocks = ["sky","cloud","tree"]
//
// if (world[i][j] == 1){
//     add Class blocks[world[i][j]]
// }
// End of example


//adding the sky to errything
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            $("#" + i + "-" + j).css("background-color", "skyblue");
        }
    }

//setting that dirt
    for (var i = 14; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            $("#" + i + "-" + j).addClass("dirt");

        }
    }

//time for some grass
    for (var i = 13; i < 14; i++) { //just want one row
        for (var j = 0; j < 20; j++) {
            $("#" + i + "-" + j).css("background-image", "url('./images/grass.png')").css("background-size", "cover");
        }
    }

//adding left bush
    for (var i = 12; i < 13; i++) {
        for (var j = 3; j < 6; j++) {
            $("#" + i + "-" + j).css("background-image", "url('./images/leaf.jpg')").css("background-size", "cover");
        }
    }

//some more bush
    $("#" + 11 + "-" + 4).css("background-image", "url('./images/leaf.jpg')").css("background-size", "cover");

//rocks
    $("#" + 12 + "-" + 14).css("background-image", "url('./images/rock.png')").css("background-size", "cover");
    $("#" + 12 + "-" + 13).css("background-image", "url('./images/rock.png')").css("background-size", "cover");
    $("#" + 12 + "-" + 19).css("background-image", "url('./images/rock.png')").css("background-size", "cover");

//tree bark
    $("#" + 12 + "-" + 16).addClass("tree");
    $("#" + 11 + "-" + 16).addClass("tree");
    $("#" + 10 + "-" + 16).addClass("tree");

//leaf for tree
    for (var i = 7; i < 10; i++) {
        for (var j = 15; j < 18; j++) {
            $("#" + i + "-" + j).css("background-image", "url('./images/leaf.jpg')").css("background-size", "cover");
        }
    }

//creating the cloud
    for (var i = 6; i < 7; i++) {
        for (var j = 3; j < 11; j++) {
            $("#" + i + "-" + j).css("background-color", "white");

        }
    }
//some more of the cloud...
    $("#" + 7 + "-" + 8).css("background-color", "white");
    $("#" + 7 + "-" + 7).css("background-color", "white");

    $("#" + 5 + "-" + 10).css("background-color", "white");
    $("#" + 5 + "-" + 9).css("background-color", "white");

    $("#" + 5 + "-" + 4).css("background-color", "white");
    $("#" + 5 + "-" + 5).css("background-color", "white");
    $("#" + 5 + "-" + 6).css("background-color", "white");
    $("#" + 5 + "-" + 7).css("background-color", "white");
    $("#" + 4 + "-" + 6).css("background-color", "white");

};



// this function is the tool selector and updator
Minecraft.clickedTool=function () {
    if (Minecraft.selectedTool === "") {
        Minecraft.selectedTool = $(this);
        console.log(Minecraft.selectedTool);
        $(this).css("background-color", "blue");
    }
    else if (Minecraft.selectedTool !== "") {
        $(Minecraft.selectedTool).css("background-color", "black");
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
        console.log(Minecraft.selectedDiv.attr("class"))
        console.log(Minecraft.selectedTool.attr("id"))
        if (Minecraft.selectedDiv.is(".tree") && Minecraft.selectedTool.is("#axe")){
            alert("tree and axe")
        }
        if(Minecraft.selectedDiv.classList == Minecraft.selectedTool.classList){
            $("#selectedBrick").css("background-color", "red");
            return;
        }
    }
}















