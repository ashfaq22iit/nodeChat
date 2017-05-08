console.log('Hello from index.js chat example');

var app = require('express')();
var http = require('http').Server(app);


//Linde for including css files
var express = require('express');
app.use(express.static(__dirname + '/public'));


var io = require('socket.io')(http);

var mysql = require('mysql');
//var connection = mysql.createConnection({
var pool  = mysql.createPool({
	host:'localhost',
	user: 'root',
	password:'',
	database:'chatdemo'

	// host:'us-cdbr-iron-east-04.cleardb.net',
	// user: 'b0c0d1b87dfc8a',
	// password:'a109cca2',
	// database:'heroku_7561fb31d51e918'

});

	// pool.connect(function(err){
	// if(!err) {
	//     console.log("Database is connected ... nn");    
	// } else {
	//     console.log("Error connecting database ... nn");    
	// }
	// });


pool.getConnection(function(err, connection) {  
  if(err){console.log('Database Connection failed')}
  console.log("Database is connected ... nn");  
});




var people = {};

io.on('connection', function(socket){

	console.log('a new user connected.');

	pool.query('select * from messages ORDER BY id ASC', function(err,rows){
			if(!err){		
				io.emit('chatHistory', rows);
				//console.log('data found : ', rows);
			}else{
				console.log('query error');
			}
		});

	socket.on('join',function(name){
		console.log('socket.id', socket.id);
		pool.query('SELECT * from user WHERE name = '+ '"name"' , function(err,result){
			console.log(result.length , 'result.length');
			if(result.length < 1 ){
				console.log('herr');
				pool.query('INSERT INTO user (name, socket_id) values ("'+name+'","'+socket.id+'")' , function(err,result){
					if(err){
						console.log('insert query error');
					}else{
						console.log('record inserted successfully');
						pool.query('SELECT * from user ' , function(err,result){
							console.log('err,result', err,result);
							  io.emit('userList', result)
						})
					}
				});
			}else{
				console.log('user already exist.');
			}
			console.log(err, '*******' ,result);
		})
		
			people[socket.id] = name;
			console.log(name+' has joined');
		});

	socket.on('disconnect', function(){
		console.log('user is disconnected');	
	});
	
	socket.on('chat message', function(msg){
	    console.log(people[socket.id]+': '+msg);
	    io.emit('chat message', '<span style="font-weight: bold;font-size: 13px;">'+people[socket.id]+'</span>: <span class"message"  style="font-size: 10px;">'+msg+'</span>'); 
	    //console.log('INSERT INTO messages (name, message) values ('+people[socket.id]+','+msg+')');
	    store_chat(people[socket.id], msg);

	   //socket.broadcast.emit('chat message', msg);
	  });	
	
});

	function store_chat(name, msg){
		pool.query('INSERT INTO messages (name, message) values ("'+name+'","'+msg+'")' , function(err,result){
			if(err){
				console.log('insert query error');
			}else{
				console.log('record inserted successfully');
			}
		});
	}



app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');

	//io.emit('test', 'Hello world');


	
	//var test = 'test';
	//var history = get_chatHistory(test, res);
	//console.log('print in js: ', history);
	// var chatHistory = new Array();
	// chatHistory['history'] = get_chatHistory(); 
	//io.emit('chatHistory',chatHistory);
	

});

var port = (process.env.PORT || 3005);

http.listen(port, function(req, res){
	console.log(port+' server is running on port: ', req);
});


// var port = process.env.PORT || 8000;

// server.listen(port, function() {
//     console.log("App is running on port " + port);
// });