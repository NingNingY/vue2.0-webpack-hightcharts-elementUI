<template>
  <div class="another-page container"><br><br><br>
  	<div class="row">
  		<h1>模拟后台请求，制造假数据</h1>
  	</div>
  	<div class="row">
  		<div class="md-offset-10">
		  	<div class="panel panel-danger line-style">
		  		<div class="panel-heading ">按钮控制数据显示</div>
		  		<div class="panel-body">
		  			<div class="pull-right button-group">
		  				<div class="toggle-button"
		  						 v-for="(item, index) in this.lineLengend" 
		  						 @click="toggleLine(index)">
  							<button type="button" 
  										  class="btn btn-success">
  										  {{item}}
  							</button>
		  				</div>
		  			</div>
						<div class="line"></div>
		  		</div>
		  	</div>
		  </div>
		</div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Another',
  data() {
  	return {
  		lineLengend: ['JavaScript', 'Jquery', 'Angular', 'Vue']
  	}
  },
  methods: {
  	creatLine() {
  		this.myChart = echarts.init(document.querySelector('.line')) // .line 必须指定宽、高
	    this.myChart.setOption({
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
	        type: 'value',
	        boundaryGap: false
	      },
	      yAxis: {
	      	name: "百分比/%",
	      	boundaryGap: false
	      },
	      series: [{
							name: '人数/百分比',
							type: 'line',
							data: [['0', '0'], ['10', '10'], ['20', '20'], ['30', '30'],['40', '40'],['50', '50'], ['60', '60'],['70', '70'],['80', '80'],['90', '90'],['100', '100']],
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
	  toggleLine(index) {
	  	console.log("toggleLine", index)
	  	let newOption = {}
	  	switch(index) {
	  		case 0:
	  		newOption.series = [{
					name: '人数百分比',
					type: 'line',
					data: [[50,100],[100,100],[100,50],[75,0],[50,40]],
					legendHoverLink: true,
					smooth: true,
					lineStyle: {
						normal: {
							width: 2
						}
					}
				}]
				break
				case 1:
				newOption.series = [{
					name: '人数百分比',
					type: 'line',
					data: [[250,50],[200,80],[250,100],[300,80],[250,50],[300,60],[400,80],[450,50],[400,20],[300,40],[250,50],[300,20],[250,0],[200,20],[250,50],[250,50],[200,60],[100,80],[50,50],[100,20],[200,40],[250,50]],
					legendHoverLink: true,
					smooth: true,
					lineStyle: {
						normal: {
							width: 2
						}
					}
				}]
				break
				case 2:
				newOption.series = [{
					name: '人数百分比',
					type: 'line',
					data: [[0,0],[50,50],[100,100],[150,50],[200,0],[200,0],[150,50],[50,50]],
					legendHoverLink: true,
					smooth: false,
					lineStyle: {
						normal: {
							width: 2
						}
					}
				}]
				break
				case 3:
				newOption.series = [{
					name: '人数百分比',
					type: 'line',
					data: [[0,100],[100,0],[200,100]],
					legendHoverLink: true,
					smooth: false,
					lineStyle: {
						normal: {
							width: 2
						}
					}
				}]
				break
	  	}
	  	this.myChart.setOption(newOption)
	  },
  },
  mounted() {
    this.creatLine()
	}
}
</script>

<!-- 添加'scoped'属性主要是为了限制以下样式仅在当前页面生效 -->
<style scoped>
.line-style {
	height: 400px;
}
.line-style .button-group{
	height: 50px;
	width: 85%;
	margin-right: 13%;
}

.line-style .toggle-button{
	float: left;
	margin: 0 10px;
}
.line {
	height: 320px;
	width: 85%;
	margin: 50px auto;
}
</style>