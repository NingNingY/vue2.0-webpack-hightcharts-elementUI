export const drawStockLine = yData => {
  let config = {
        options: {
          chart: {
            type: 'line'
          },
          title: {
            text: '模拟图表（一）-- Hightstock'
          },
          credits: {
            enabled: false
          },
          rangeSelector: {
            allButtonsEnabled: true,
            selected: 1,
            buttonSpacing: 10,
            buttons : [{
              type : 'month',
              count : 3,
              text : '三个月'
            }, {
              type : 'month',
              count : 6,
              text : '六个月'
            }, {
              type : 'all',
              count : 1,
              text : '全部'
            }],
            buttonTheme: { // styles for the buttons
              fill: '#1296db',
              stroke: 'none',
              'stroke-width': 0,
              width: 60,
              r: 8,
              style: {
                color: '#fff',
                fontWeight: 'bold',
                backgroundColor: '#000'
              },
              states: {
                hover: {
                },
                select: {
                    fill: '#56d1f3',
                    style: {
                        color: 'white'
                    }
                }
              }
            },
            inputDateFormat: '%Y-%m-%d',
            inputEditDateFormat: '%Y-%m-%d',
            // inputEnabled : false,
          },
          tooltip: {
            split: false,
            shared: true
          },
          xAxis: {
            title: {
              text: '日期'
            }
          },
          yAxis: {
            title: {
              text: '上涨趋势',
              align: 'high',
              alternateGridColor: '#FDFFD5',
              title: {
                text: '百分比'
              },
            }
          },
          series: [{
            name: 'Jane',
            data: yData
          }]
        }
  }
  return config
}

export const drawCandleLine = yData => {
  let config = {
        options: {
          chart: {
            type: 'candlestick'
          },
          title: {
            text: '模拟图表（二）--  蜡烛图交易大盘'
          },
          credits: {
            enabled: false
          },
          rangeSelector: {
            allButtonsEnabled: true,
            selected: 1,
            buttonSpacing: 10,
            buttons : [{
              type : 'minute',
              count : 10,
              text : '10min'
            }, {
              type : 'minute',
              count : 20,
              text : '20min'
            }, {
              type : 'all',
              count : 1,
              text : 'All'
            }],
            buttonTheme: { // styles for the buttons
              fill: '#1296db',
              width: 60,
              r: 8,
              style: {
                color: '#fff',
                fontWeight: 'bold',
                backgroundColor: '#000'
              },
              states: {
                hover: {
                },
                select: {
                    fill: '#56d1f3',
                    style: {
                        color: 'white'
                    }
                }
            },
            inputEnabled : true,
            },
          },
          tooltip: {
            split: false,
            shared: true
          },
          xAxis: {
            // categories: yData,
            title: {
              text: '日期'
            }
          },
          yAxis: {
            title: {
              text: '上涨趋势',
              align: 'high',
              // rotation: 0,
              alternateGridColor: '#FDFFD5',
              title: {
                text: '百分比'
              },
              // x: -800,
            }
          },
          series: [{
              // type: 'candlestick',
              name: 'Jane',
              data: yData
          }]
        }
  }
  return config
}

