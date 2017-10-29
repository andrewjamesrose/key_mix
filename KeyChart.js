var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};

var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                1,1,1,1,1,1,1,1,1,1,1,1
            ],
                backgroundColor: [
                    "#009A90","#3DB54B","#B8D432","#FEF200","#FFCC00","#FF9900",
                    "#EF5D22","#F80120","#C20072","#68397F","#2E2C75","#3401CC"
            ],
        }, {
            data: [
                1,1,1,1,1,1,1,1,1,1,1,1
            ],
                backgroundColor: [
				    "#009A90","#3DB54B","#B8D432","#FEF200","#FFCC00","#FF9900",
                    "#EF5D22","#F80120","#C20072","#68397F","#2E2C75","#3401CC"
            ],
        }, ],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Dark Grey"
        ]
    },
    options: {
      responsive: false,
    	animation: {
        duration: 0
    	}
      

    }
    

};

var ctx = document.getElementById("chart-area").getContext("2d");
var myDoughnut = new Chart(ctx, config);