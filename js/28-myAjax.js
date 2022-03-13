function resolveData(data) {
  var arr = []
  for (let i in data) {
    arr.push(i + '=' + data[i])
  }
  return arr.join('&')
}

// var result = resolveData({
//   name: 'xxx', //i 指的是name属性  data[i]是指i指的属性的值
//   age: 20
// })
// // for (let i in data) {
// // arr.push(i + '=' + data[i])     //name==xxx 
// // }
// console.log(result);

function myAjax(options) {
  var xhr = new XMLHttpRequest()
  var qs = resolveData(options.data)

  //判断请求方式
  if (options.method.toUpperCase() === 'GET') {
    //发起get请求
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send()
  } else if (options.method.toUpperCase() === "POST") {
    //发起POST请求
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText)
      options.success(result)
    }
  }
}





