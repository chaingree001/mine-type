'use strict'
const { getContentType, getFileType } = require('./index')

const t1 = getContentType('html')
const t2 = getContentType('svg')
// 找不到目标，返回默认值text/html
const t3 = getContentType('xxsvg', 'text/html')
console.log(t1)
console.log(t2)
console.log(t3)

const t4 = getFileType(t1)
const t5 = getFileType(t2)
const t6 = getFileType(t3)
console.log(t4)
console.log(t5)
console.log(t6)
