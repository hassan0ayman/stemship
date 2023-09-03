anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Maadi", value: 31},
        {x: "Red Sea", value: 28},
        {x: "October", value: 22},
        {x: "Ismailia", value: 21},
        {x: "Assiut", value: 19},
        {x: "Gharbia", value: 17},
        {x: "Dakahlia", value: 15},
        {x: "Qenna", value: 14},
        {x: "Obour", value: 13},
        {x: "Bani Sweif", value: 12},
        {x: "Sharqia", value: 10},
        {x: "Menoufia", value: 10},
        {x: "Kafr El-Sheikh", value: 9},
        {x: "Luxor", value: 7},
        {x: "Sadat", value: 5},
        {x: "Souhag", value: 5},
        {x: "Minia", value: 2},

    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Percentage of Acceptance in Each School");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('chart');
    chart.draw();
  
  });