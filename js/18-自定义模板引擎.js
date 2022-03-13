function template(id, data) {
  var Str = document.getElementById(id).innerHTML
  var Pattern = /{{\s*([a-zA-Z]+)\s*}}/
  var result = null

  while (result = Pattern.exec(Str)) {
    //result = Pattern.exec(Str) :Result 返回的是一个键值对
    Str = Str.replace(result[0], data[result[1]])
    console.log(Str);
    //<div>你好name，{{age}}</div>
  }
  return Str
}