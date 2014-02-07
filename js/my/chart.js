var ctx = $("#myChart").get(0).getContext("2d");
var data = {
        labels : ["1","2","3","4","5","6","7", "8", "9"],
        datasets : [
                {
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        data : [0,0,0,0,0,0,0,0,0]
                }
        ]
}
var options = "";
new Chart(ctx).Bar(data,options);

function montrerLePoidsDeChaqueChiffre(grille){
    for(var k = 0; k < OUTPUT_COUNT ; k++){
        data.datasets[0].data[k - 1] = grille[k];
    }
    new Chart(ctx).Bar(data,options);
}