// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main3'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '50%'],
            data:[
                {
                    value:15,
                    name:'15%',
                    itemStyle:{
                        normal:{color:'#184c86'}
                    }
                },
                {
                    value:15,
                    name:'15%',
                    itemStyle:{
                        normal:{color:'#29f1ff'}
                    }
                },
                {
                    value:15,
                    name:'15%',
                    itemStyle:{
                        normal:{color:'#2fbbf8'}
                    }
                },
                {
                    value:15,
                    name:'15%',
                    itemStyle:{
                        normal:{color:'#097fbc'}
                    }
                }
            ],
            label: {
                normal: {
//                            position: 'inner',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#f5ba22'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);