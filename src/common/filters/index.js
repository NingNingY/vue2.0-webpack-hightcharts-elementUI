import {domain, textOverflow, numberFormat} from './html-filter'
import {stringToYMD, stringToSim, unixToSim, unixToYMD} from './time-filter'
import {buildZDFPercent, buildZDFZero, buildZDF, buildZDFUnit} from './num-filter'
import Vue from 'vue/dist/vue.common.js'

const filters = {
  domain,
  textOverflow,
  numberFormat,
  stringToYMD,
  unixToSim,
  unixToYMD,
  stringToSim,
  buildZDFPercent,
  buildZDFZero,
  buildZDF,
  buildZDFUnit
}

export default filters

