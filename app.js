var express = require('express');
// import express from 'express';
var app = express();
var fs = require('fs')
// var sequelize = require('./public/js/sequelize')// 数据库模块

//app.set('views',path.join('views'));
app.engine('html', require('ejs').renderFile);  // 引入ejs并设置渲染引擎
app.use(express.static(__dirname + '/public'));  //设置静态文件访问位置， 默认是没有的！
app.set('view engine','html'); // 设置渲染模板的文件类型  一般是.ejs 格式的 但是也可以设置为html 更方便调试

/*设置访问根目录时显示的界面*/
app.get('/', function (req, res) {
  res.render('index');
});

// // 不同请求类型
// app.post('/bindData', (req, res)=>{
//   let data = '' // 监听数据
//   req.on('data', chunk=>{
//     data += chunk
//   })
//   req.on('end',()=>{
//     console.log('Received data form client: ', data)
//     res.send('Data from Server.')
//   })
// })// 路由

/*创建服务器 本地3000端口*/
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(' App listening at http://%s:%s', host, port);
});