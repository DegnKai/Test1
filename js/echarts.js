//*****曲线图
function line() {
    var xmlhttp = new XMLHttpRequest(),
        myChart = echarts.init(document.querySelector('.box2'))
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText).data
            myChart.setOption({
                title: {
                    text: '曲线图数据展示',
                    left: "center",
                    padding:[15,0]
                },
                tooltip: {},
                xAxis: {
                    data: data.xAxis
                },
                yAxis: {},
                series: [{
                    type: 'line',
                    data: data.series,
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
        }
    }
    xmlhttp.open('GET', 'https://edu.telking.com/api/?type=month', true)
    xmlhttp.send()
}

//*****饼状图
function pie() {
    var xmlhttp = new XMLHttpRequest(),
        myChart = echarts.init(document.querySelector('.pie'))
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText).data,
                seriesData = []
            seriesName = data.xAxis
            seriesValue = data.series
            for (var i in seriesName) {
                seriesData.push({ name: seriesName[i], value: seriesValue[i] })
            }
            myChart.setOption({
                title: {
                    text: '饼状图数据展示',
                    left: "center",
                    padding:[20,0]
                },
                tooltip: {},
                series: [{
                    name: "销量",
                    type: 'pie',
                    radius: '55%',
                    data: seriesData
                }]
            })
        }
    }
    xmlhttp.open('GET', 'https://edu.telking.com/api/?type=week', true)
    xmlhttp.send()
}

//*****柱状图
function bar() {
    var xmlhttp = new XMLHttpRequest(),
        myChart = echarts.init(document.querySelector('.bar'));
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText).data
            myChart.setOption({
                title: {
                    text: '柱状图数据显示',
                    left: 'center'
                },
                tooltip: {},
                xAxis: {
                    data: data.xAxis
                },
                yAxis: {
                    name: '商品数'
                },
                series: [{
                    name: '商品数',
                    type: 'bar',
                    barWidth: 18,
                    data: data.series,
                    itemStyle: {
                        normal: {
                            color: '#4587f0'
                        }
                    }
                }]
            })
        }
    }
    xmlhttp.open('GET', 'https://edu.telking.com/api/?type=week', true)
    xmlhttp.send()
}