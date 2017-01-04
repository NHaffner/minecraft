var main = $(".container");
var rowArray = [];

//creating the grid
for (var i = 0; i < 20; i++) {
    var row = $("<div class='row'></div>");
    rowArray[i]=Array(20);
    main.append(row);
    for (var j = 0; j < 20; j++) {
        var box = rowArray[i][j]= $("<div class='box'></div>");
        box.data("row", i);
        box.data("column", j);
        box.attr("id", i+"-"+j); //gives each on at id
        row.append(box);
    }
}

console.log(rowArray);

//adding the sky to errything
for (var i = 0; i <20; i++){
    for (var j = 0; j< 20; j++) {
        $("#"+i+"-"+j).css("background-color", "skyblue");
        }
}

//setting that dirt 
for (var i = 14; i<20; i++){
    for (var j = 0; j < 20; j++){
         $("#"+i+"-"+j).css("background-image", "url('./images/dirt.png')").css("background-size","cover");
    }
}

//time for some grass 
for (var i = 13; i<14; i++){ //just want one row
    for (var j = 0; j < 20; j++){
         $("#"+i+"-"+j).css("background-image", "url('./images/grass.png')").css("background-size","cover");
    }
}

//adding left bush 
for (var i = 12; i <13; i++){
    for (var j = 3; j<6; j++){
         $("#"+i+"-"+j).css("background-image", "url('./images/leaf.jpg')").css("background-size","cover");
    }
}

//some more bush 
         $("#"+11+"-"+4).css("background-image", "url('./images/leaf.jpg')").css("background-size","cover");

//rocks 
         $("#"+12+"-"+14).css("background-image", "url('./images/rock.png')").css("background-size","cover");
         $("#"+12+"-"+13).css("background-image", "url('./images/rock.png')").css("background-size","cover");
         $("#"+12+"-"+19).css("background-image", "url('./images/rock.png')").css("background-size","cover");

//tree bark
         $("#"+12+"-"+16).css("background-image", "url('./images/tree.png')").css("background-size","cover");
         $("#"+11+"-"+16).css("background-image", "url('./images/tree.png')").css("background-size","cover");
         $("#"+10+"-"+16).css("background-image", "url('./images/tree.png')").css("background-size","cover");

//leaf for tree
        for(var i = 7; i <10; i++){
            for(var j = 15; j< 18; j++){
         $("#"+i+"-"+j).css("background-image", "url('./images/leaf.jpg')").css("background-size","cover");
            }
        }

//creating the cloud 
    for (var i = 6; i <7; i++){
        for ( var j = 3; j < 11; j++){
         $("#"+i+"-"+j).css("background-color", "white");

        }
    }
//some more of the cloud...
         $("#"+7+"-"+8).css("background-color", "white");
         $("#"+7+"-"+7).css("background-color", "white");

         $("#"+5+"-"+10).css("background-color", "white");
         $("#"+5+"-"+9).css("background-color", "white");

         $("#"+5+"-"+4).css("background-color", "white");
         $("#"+5+"-"+5).css("background-color", "white");
         $("#"+5+"-"+6).css("background-color", "white");
         $("#"+5+"-"+7).css("background-color", "white");
         $("#"+4+"-"+6).css("background-color", "white");










