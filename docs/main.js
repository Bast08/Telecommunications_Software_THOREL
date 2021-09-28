
     var ourRequest = new XMLHttpRequest();

     ourRequest.open('GET', 'https://4v9r83qfo4.execute-api.eu-central-1.amazonaws.com/dev');

     ourRequest.onload = function(){
          var data = JSON.parse(ourRequest.responseText);
          console.log(data.course);
          addCode('course : ',data.course);
          addCode('courseName : ',data.courseName);
          addCode('releaseYear : ',data.releaseYear);
          addCode('courseActive : ',data.courseActive);
          addCode('droppedStudents : ',data.droppedStudents);
         addCode('date : ', data.date);

chart_1(data.someData);
chart_2(data.scores);
chart_3(data.someData);
     };
ourRequest.send();

function addCode(text, data) {
            document.getElementById("add-data").innerHTML += text + data + "<p>";
        }

function chart_1(param_data){
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [param_data[0][1],param_data[1][1],param_data[2][1],param_data[3][1]],
        datasets: [{
            label: '# of someData',
           data: [param_data[0][0],param_data[1][0],param_data[2][0],param_data[3][0]],

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
};


function chart_2(scores){
var ctx = document.getElementById('myChart_2').getContext('2d');
var myChart = new Chart(ctx, {
   type: 'doughnut',
    data: {
     labels: [
    'TEST',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [scores.a, scores.b, scores.c],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]},
});
};


function chart_3(param_data){
var ctx = document.getElementById('myChart_3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [{
            label: '# of Some Data',
            data: [{
               x: param_data[0][1],
                y: param_data[0][0],
                r: 5
           },
           {
               x: param_data[1][1],
                y: param_data[1][0],
                r: 5
           },
           {
             x: param_data[2][1],
                y: param_data[2][0],
                r: 5  
           },
           {
             x: param_data[3][1],
                y: param_data[3][0],
                r: 5  
           }
           ],
            backgroundColor: 'rgb(255, 99, 132)',

           
        }]
    },
    options: {
   scales: {
            x: {
                grace: 1
            },
            y: {
                beginAtZero: true
            }
        }

    }
});
};
