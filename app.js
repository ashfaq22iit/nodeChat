console.log('Hello from index.js chat example');

var app = require('express')();
var http = require('http').Server(app);


//Linde for including css files
var express = require('express');
app.use(express.static(__dirname + '/public'));


var io = require('socket.io')(http);

var mysql = require('mysql');
//var connection = mysql.createConnection({
var pool = mysql.createPool({
	// host:'localhost',
	// user: 'root',
	// password:'',
	// database:'chatdemo'

	host:'us-cdbr-iron-east-04.cleardb.net',
	user: 'b0c0d1b87dfc8a',
	password:'a109cca2',
	database:'heroku_7561fb31d51e918'

});

	pool.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... nn");    
	} else {
	    console.log("Error connecting database ... nn");    
	}
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

	
	
	
	// socket.on('connect', function(){
	// 	io.emit('test', 'Hello world');
	// });

	
	
	
});

	function store_chat(name, msg){
		pool.query('INSERT INTO heroku_7561fb31d51e918.messages (name, message) values ("'+name+'","'+msg+'")' , function(err,result){
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