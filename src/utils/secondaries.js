import Chart from 'chart.js/auto'

(async function() {
    const data = [
      { x: 'Underlying value', total: 100 },
      { x: 'Secondaries', discount: 20, capitalGains: 30, remainingValue: 50},
      { x: 'Collective Equity', cash: 15, debt: -20, remainingValue: 100 },
    ];
  
    var ctx = document.getElementById("secondaries")

    new Chart(ctx,
      {
        type: 'bar',
        data: {
            datasets: [{
                data: data
            }]
        },
        
        options: {
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            }
        }
      }
    );
  })();