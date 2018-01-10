/*
*
* 时间格式化过滤器
*
* Description
*
*/

// 相对时间过滤器，传入时间，返回距离今天有多久
export const unixToSim = time => {
  time = Number(time)
	return time ? moment(parseFloat(time) * 1000).format('YYYY/MM/DD') : '--'
}

export const unixToYMD = time => {
  time = Number(time)
  return time ? moment(parseFloat(time) * 1000).format('YYYY年MM月DD日') : '--'
}

// YMDHMS时间转换过滤器(字符串格式改为YYYY年MM月DD日)
export const stringToYMD = date => {
  date = date.toString()
	return date ? moment(date).format('YYYY年MM月DD日') : '--'
}

export const stringToSim = date => {
  date = date.toString()
  return date ? moment(date).format('YYYY/MM/DD') : '--'
}



