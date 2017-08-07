
$(document).ready(function () {
    init();
});


function init() {
    getListCollabs();
}

function getListCollabs() {
    $.get("http://localhost:8080/sgp/api/collaborateurs").done(function (data) {
        populateTable(data);
    });
};

function populateTable(data) {
    $("#listCollabs > .collab").remove();
    data.forEach(function (element) {
        var line = "<tr class='collab'>";
        line += "<td class='matricule' style='text-align: center;'>" + element.matricule + "</td>";
        line += "<td style='text-align: center;'>" + element.nom + "</td>";
        line += "<td style='text-align: center;'>" + element.prenom + "</td>";
        line += "</tr>";
        $("#listCollabs").append(line);
    }, this);

    selectRowOnTable();
};

function selectRowOnTable() {
    $("#listCollabs > .collab").on("click", function () {
        var matricule = $(this).find(".matricule").text();
        
        $("tr").css({"background-color":"white"});
        $("tr").css({"color":"black"})
        $(this).css({"background-color":"green"});
        $(this).css({"color":"white"});
    });
};