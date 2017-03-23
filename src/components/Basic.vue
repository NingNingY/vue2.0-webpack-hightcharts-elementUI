<template>
  <div class="basic-page container"><br><br><br>
  	<div class="row">
  		<div class="md-offset-10">
		  	<div class="panel panel-danger">
		  		<div class="panel-heading ">1.折线图</div>
		  		<div class="panel-body">
						<div class="line"></div>
		  		</div>
		  	</div>
		  	<div class="panel panel-danger">
		  		<div class="panel-heading ">2. 饼图</div>
		  		<div class="panel-body">
						<div class="pie"></div>
		  		</div>
		  	</div>
		  	<div class="panel panel-danger">
		  		<div class="panel-heading ">3. 散点图</div>
		  		<div class="panel-body">
						<div class="scatter"></div>
		  		</div>
		  	</div>
		  	<div class="panel panel-danger">
		  		<div class="panel-heading ">4. 地图</div>
		  		<div class="panel-body">
						<div class="map"></div>
		  		</div>
		  	</div>

		  </div>
		</div>
  </div>

</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Basic',
  methods: {
  	creatPie() {
  		this.myChart = echarts.init(document.querySelector('.pie')) // .line 必须指定宽、高
    	this.myChart.setOption({
		    title : {
		        text: '某站点用户访问来源',
		        subtext: '纯属虚构',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		    },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:234, name:'联盟广告'},
		                {value:135, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
			})
  	},
  	creatLine() {
  		this.myChart = echarts.init(document.querySelector('.line')) // .line 必须指定宽、高
	    this.myChart.setOption({
	    	title: {
		        text: '折线图'
		    },
	      legend: {
	        data: ['人数/百分比']
	   		},
	      tooltip: {
	        trigger: 'item',
	        triggerOn: 'mousemove'
	    	},
	      toolbox: {
	        show : true,
	        right: '8%',
	        top: '0%',
	        iconStyle: {
	        	normal: {
	        		borderColor: 'rgb(57, 179, 215)'
	        	},
	        	emphasis: {
	        		borderColor: 'rgb(57, 179, 215)',
	        		shadowColor: '#fff',
	        		shadowOffsetX: 0,
	        		shadowOffsetY: 0
	        	}
	        },
	        feature : {
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        },
	        option: {
	        	bar: {
	        		barGap: 0.01,
							barCategoryGap: 0.001
	        	}
	        }
	    	},
	      grid: {
	        top: '15%',
	        left: '2%',
	        right: '8%',
	        bottom: '6%',
	        containLabel: true
	      },
	      xAxis: {
	      	name: "得分/分",
	      	nameLocation: "end",
	        type: 'category',
	        data: ['0', '50', '100', '150','200','250', '300','350', '400','450', '500'],
	      },
	      yAxis: {
	      	name: "百分比/%"
	      },
	      series: [{
							name: '人数/百分比',
							type: 'line',
							data: ['0', '50', '100', '150','200','250', '300','350', '400','450', '500'],
							legendHoverLink: true,
							smooth: true,
							lineStyle: {
								normal: {
									width: 2
								}
							}
						}],
				color: ['#4d94e5']
			})	  
			this.legendArr = this.myChart.getOption().series  //  创建图例
	  },
	  creatScatter() {
  		this.myChart = echarts.init(document.querySelector('.scatter')) // .line 必须指定宽、高
	    this.myChart.setOption({
		    title: {
		        text: '大规模散点图'
		    },
		    tooltip : {
		        trigger: 'axis',
		        showDelay : 0,
		        axisPointer:{
		            show: true,
		            type : 'cross',
		            lineStyle: {
		                type : 'dashed',
		                width : 1
		            }
		        },
		        zlevel: 1
		    },
		    legend: {
		        data:['sin','cos']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataZoom : {show: true},
		            dataView : {show: true, readOnly: false},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    xAxis : [
		        {
		            type : 'value',
		            scale:true
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            scale:true
		        }
		    ],
		    series : [
		        {
		            name:'sin',
		            type:'scatter',
		            large: true,
		            symbolSize: 3,
		            data: (function () {
		                var d = []
		                var len = 10000
		                var x = 0
		                while (len--) {
		                    x = (Math.random() * 10).toFixed(3) - 0
		                    d.push([
		                        x,
		                        //Math.random() * 10
		                        (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
		                    ])
		                }
		                //console.log(d)
		                return d
		            })()
		        },
		        {
		            name:'cos',
		            type:'scatter',
		            large: true,
		            symbolSize: 2,
		            data: (function () {
		                var d = [];
		                var len = 20000;
		                var x = 0;
		                while (len--) {
		                    x = (Math.random() * 10).toFixed(3) - 0;
		                    d.push([
		                        x,
		                        //Math.random() * 10
		                        (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
		                    ]);
		                }
		                //console.log(d)
		                return d;
		            })()
		        }
		    ]
		  })
			this.legendArr = this.myChart.getOption().series  //  创建图例
	  },
	  randomData() {
	    return Math.round(Math.random()*1000)
	  },
	  creatMap() {
	  	this.myChart = echarts.init(document.querySelector('.map')) // .line 必须指定宽、高
	    this.myChart.setOption({
	    title: {
	        text: 'iphone销量',
	        subtext: '纯属虚构',
	        left: 'center'
	    },
	    tooltip: {
	        trigger: 'item'
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data:['iphone3','iphone4','iphone5']
	    },
	    visualMap: {
	        min: 0,
	        max: 2500,
	        left: 'left',
	        top: 'bottom',
	        text: ['高','低'],           // 文本，默认为数值文本
	        calculable: true
	    },
	    toolbox: {
	        show: true,
	        orient: 'vertical',
	        left: 'right',
	        top: 'center',
	        feature: {
	            dataView: {readOnly: false},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    series: [
	        {
	            name: 'iphone3',
	            type: 'map',
	            mapType: 'china',
	            roam: false,
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {name: '北京',value: this.randomData() },
	                {name: '天津',value: this.randomData() },
	                {name: '上海',value: this.randomData() },
	                {name: '重庆',value: this.randomData() },
	                {name: '河北',value: this.randomData() },
	                {name: '河南',value: this.randomData() },
	                {name: '云南',value: this.randomData() },
	                {name: '辽宁',value: this.randomData() },
	                {name: '黑龙江',value: this.randomData() },
	                {name: '湖南',value: this.randomData() },
	                {name: '安徽',value: this.randomData() },
	                {name: '山东',value: this.randomData() },
	                {name: '新疆',value: this.randomData() },
	                {name: '江苏',value: this.randomData() },
	                {name: '浙江',value: this.randomData() },
	                {name: '江西',value: this.randomData() },
	                {name: '湖北',value: this.randomData() },
	                {name: '广西',value: this.randomData() },
	                {name: '甘肃',value: this.randomData() },
	                {name: '山西',value: this.randomData() },
	                {name: '内蒙古',value: this.randomData() },
	                {name: '陕西',value: this.randomData() },
	                {name: '吉林',value: this.randomData() },
	                {name: '福建',value: this.randomData() },
	                {name: '贵州',value: this.randomData() },
	                {name: '广东',value: this.randomData() },
	                {name: '青海',value: this.randomData() },
	                {name: '西藏',value: this.randomData() },
	                {name: '四川',value: this.randomData() },
	                {name: '宁夏',value: this.randomData() },
	                {name: '海南',value: this.randomData() },
	                {name: '台湾',value: this.randomData() },
	                {name: '香港',value: this.randomData() },
	                {name: '澳门',value: this.randomData() }
	            ]
	        },
	        {
	            name: 'iphone4',
	            type: 'map',
	            mapType: 'china',
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {name: '北京',value: this.randomData() },
	                {name: '天津',value: this.randomData() },
	                {name: '上海',value: this.randomData() },
	                {name: '重庆',value: this.randomData() },
	                {name: '河北',value: this.randomData() },
	                {name: '安徽',value: this.randomData() },
	                {name: '新疆',value: this.randomData() },
	                {name: '浙江',value: this.randomData() },
	                {name: '江西',value: this.randomData() },
	                {name: '山西',value: this.randomData() },
	                {name: '内蒙古',value: this.randomData() },
	                {name: '吉林',value: this.randomData() },
	                {name: '福建',value: this.randomData() },
	                {name: '广东',value: this.randomData() },
	                {name: '西藏',value: this.randomData() },
	                {name: '四川',value: this.randomData() },
	                {name: '宁夏',value: this.randomData() },
	                {name: '香港',value: this.randomData() },
	                {name: '澳门',value: this.randomData() }
	            ]
	        },
	        {
	            name: 'iphone5',
	            type: 'map',
	            mapType: 'china',
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {name: '北京',value: this.randomData() },
	                {name: '天津',value: this.randomData() },
	                {name: '上海',value: this.randomData() },
	                {name: '广东',value: this.randomData() },
	                {name: '台湾',value: this.randomData() },
	                {name: '香港',value: this.randomData() },
	                {name: '澳门',value: this.randomData() }
	            ]
	        }
	    ]
	    })
	  },
  },
  mounted() {
  	// 基于准备好的dom，初始化echarts实例
    this.creatLine()
    this.creatPie()
    this.creatScatter()
    // this.creatMap()
	}
}
</script>

<!-- 添加'scoped'属性主要是为了限制以下样式仅在当前页面生效 -->
<style scoped>
.line {
	height: 280px;
	width: 85%;
	margin: 0 auto;
}
.pie {
	height: 280px;
	width: 85%;
	margin: 0 auto;
}
.scatter {
	height: 280px;
	width: 85%;
	margin: 0 auto;
}
.map {
	height: 280px;
	width: 85%;
	margin: 0 auto;
}
</style>