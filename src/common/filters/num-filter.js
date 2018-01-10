/*
*
* 数据格式化过滤器
*
* Description
*
*/

export const buildZDFPercent = num => {
  num  = Number(num)
  if (isNaN(num) || num === '' || num == null) {
    return '--'
  } else {
    num = Number(num * 100).toFixed(2)
    return num + '%'
  }
}

export const buildZDFZero = num => {
  num  = Number(num)
  if (isNaN(num) || num === '' || num == null) {
    return '--'
  } else {
    num = Number(num).toFixed(0)
    return num
  }
}


export const buildZDF = (num, limit) => {
  num  = Number(num)
  limit = Number(limit)
  if (isNaN(num) || num === '' || num == null) {
    return '--'
  } else {
    num = Number(num).toFixed(limit)
    return num
  }
}

export const buildZDFUnit = (num, unit) => {
  num  = Number(num)
  if (isNaN(num) || num == '' || num == null) {
    return '--'
  } else {
    num = Number(num).toFixed(0)
    return num + unit
  }
}

