/**
 * Created by siraz on 26-01-2017.
 */
var url="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=";

function search() {
    $.getJSON(url+$("#searchText").val(),function (data) {
        $("#result").html("Results for "+data[0]);
        for(i=0;i<data[1].length;i++){
            $("#list").append('<li><a href="'+data[3][i]+'"><div class="list-block"><h4>'+data[1][i]+'</h4><p>'+data[2][i]+'</p></div></a></li>');
        }
    });
    $("#search").html("clear");
    document.getElementById("search").onclick=function () {
        $("#list").html("");
        document.getElementById("search").onclick=search();
        $("#search").html("search");
    };
    console.log("hi there");
}