/**
 * Created by arpit on 10/3/17.
 */

$(document).ready(function () {
    window.currentRef = "X";
    window.count=0;
    window.f=makeArray();
    console.log(makeArray())
})
function makeArray() {
    var f = new Array(3);
    var iMax = 3;
    for (i = 0; i < iMax; i++) {
        f[i] = new Array(3);

    }
    return f;
}

function fillArray() {
    var c = 1;

    for(i = 0 ; i < 3 ; i++) {
        for(j = 0 ; j<3 ; j++){
            var id = "#" + c;
            c++;
            window.f[i][j]=$(id).text();
        }
    }
    return f;
}



function clickBtn() {

    if(window.winner==true){
        $("#msg").html("Game Over Press restart button For new Game")
    }
    else {
        console.log(window.winner)
        console.log("Hello" + window.currentRef);
        console.log(event.target.id);
        var id = "#" + event.target.id;

        if ($(id).text() == "X" || $(id).text() == "0") {
            $("#msg").html("Please Choose another cell")
        } else {
            $("#msg").html("")
            if (window.currentRef == "X") {
                $(id).html("0");
                // $(id).attr("background-color","red")
                $(id).css("background-color","red");
                window.currentRef = "0";
            }
            else {
                $(id).html("X");
                $(id).css("background-color","green")
                window.currentRef = "X";
            }

            var ex = fillArray();
            window.count++;
            result(ex, event.target.id);
        }
    }
}

function result(f,id) {

    for(var i = 0 ; i < 3 ; i++){
        if ((f[i][0] == "X"||f[i][0] == "0") && (f[i][0] == f[i][1]) && (f[i][1] == f[i][2])) {
            // alert($(id).text()+" Wins by Row");
            $("#res").html(f[i][0]+" Wins" );
            window.winner = true;
        }
    }
    for(var i = 0 ; i < 3 ; i++){
        if((f[0][i] == "X"||f[0][i] == "0") && (f[0][i] == f[1][i]) && (f[1][i] == f[2][i])) {
            //alert($(id).text() +" Wins by Col");
            $("#res").html(f[0][i]+" Wins" );
            window.winner = true;
        }
    }
    if(((f[0][0] == "X"||f[0][0] == "0") && ((f[0][0] == f[1][1]) && (f[1][1] == f[2][2])))||((f[0][2] == "X"||f[0][2] == "0") &&((f[0][2] == f[1][1]) && (f[1][1] == f[2][0])))) {
        console.log(((f[0][0] == "X"||f[0][0] == "0") && ((f[0][0] == f[1][1]) && (f[1][1] == f[2][2]))));
        console.log(((f[0][0] == "X"||f[0][0] == "0") && (f[0][2] == f[1][1]) && (f[1][1] == f[2][0])))
        $("#res").html(f[1][1]+" Wins" );
        window.winner = true;
    }

    if(window.count == 9) {
        $("#res").html("Game Tie Restart for next battle ");
    }

    console.log(f)

}

