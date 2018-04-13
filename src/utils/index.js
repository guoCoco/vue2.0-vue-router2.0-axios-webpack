// 常用工具文件,一些公共函数的处理
const formatNumber = (num) => {
  num = num.toString()
  return num[1] ? num : 0 + num
}

const formatDate = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const setTitleBar = function (text) {
  var title = document.getElementsByTagName('title')[0]
  title.text = text
}

module.exports = {
  formatDate: formatDate,
  setTitleBar: setTitleBar
}
