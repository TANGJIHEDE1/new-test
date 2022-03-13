
function getCommentList() {
  //获得评论
  $.ajax({
    method: 'GET',
    url: 'http://www.liulongbin.top:3006/api/cmtlist',
    //res 是接口返回的数据,可在浏览器中查看其中的数据
    success: function (res) {
      if (res.status !== 200) return alert('获取评论失败')

      var rows = []
      $.each(res.data, function (i, item) {
        var str = `
         <ul class="list-group" id="cmt-list">
         <li class="list-group-item">
          <span class="badge" style="background-color: #f4ae4e;">评论时间:`+ item.time + `</span>
          <span class="badge" style="background-color: #4fb7d7;">评论人:`+ item.username + `</span>
         `+ item.content + `
        </li>
        </ul> `
        rows.push(str)
      })
      $('#cmt-list').empty().append(rows.join(''))
    }
  })
}
getCommentList()

$(function () {
  // 在使用serialize（）函数时，必须为每个表单元素添加name属性
  $('#formAddCmt').submit(function (e) {
    e.preventDefault()
    var data = $(this).serialize()
    $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
      if (res.status !== 201) {
        return alert('发表评论失败！') 
      }
      getCommentList()
      //固定写法
      $('#formAddCmt')[0].reset()
    })
  })
})

//2022/3/10 23:03




