//*****曲线图
var myChart1 = echarts.init(document.querySelector('.box2'));
$.get('https://edu.telking.com/api/?type=month', function (data) {
    myChart1.setOption({
        title: {
            text: '曲线图数据展示',
            left: "center"
        },
        tooltip: {},
        xAxis: {
            data: data.data.xAxis
        },
        yAxis: {},
        series: [{
            type: 'line',
            data: data.data.series,
            smooth: true,
            areaStyle: {},
            itemStyle: {
                normal: {
                    color: "#4b8af0",
                    label: {
                        show: true
                    }
                }
            }
        }]
    })
})

//*****饼状图
var myChart2 = echarts.init(document.querySelector('.pie'));
$.get('https://edu.telking.com/api/?type=week', function (data) {
    var seriesData = [];
    var seriesName = data.data.xAxis;
    var seriesValue = data.data.series;
    for (var i in seriesName) {
        seriesData.push({ name: seriesName[i], value: seriesValue[i] })
    }
    myChart2.setOption({
        title: {
            text: '饼状图数据展示',
            left: "center"
        },
        tooltip: {},
        series: [{
            name: "销量",
            type: 'pie',
            radius: '55%',
            data: seriesData
        }]

    })
})

//*****柱状图
var myChart3 = echarts.init(document.querySelector('.bar'));
$.get('https://edu.telking.com/api/?type=week', function (data) {
    myChart3.setOption({
        title: {
            text: '柱状图数据显示',
            left: 'center'
        },
        tooltip: {},
        xAxis: {
            data: data.data.xAxis
        },
        yAxis: {
            name: '商品数'
        },
        series: [{
            name: '商品数',
            type: 'bar',
            barWidth: 18,
            data: data.data.series,
            itemStyle: {
                normal: {
                    color: '#4587f0'
                }
            }
        }]
    })
})