var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon_db'
})

connection.connect(function(err){
	if(err) throw err;
	console.log("connected");
})

connection.query('SELECT * FROM Products', function(err, res){
	for(var i=0; i<res.length; i++){
		console.log(res[i].ItemID + '|' + res[i].ProductName + '|' + res[i].DepartmentName  + '|' + res[i].Price + '|' + res[i].StockQuantity);
		console.log('----------------');
	}
	if(err) throw err;
	console.log(res);
})

var inquirer = require('inquirer');
connection.query('SELECT * FROM Products', function(err,res){
            for(var i=0; i<res.length; i++){
                    var goods = res[i].ItemID}});

inquirer.prompt([
{
    type: "input",
    name: "input",
    message: "What is the ID of the product you would like to buy today?",
}
]).then(function(user){
    console.log(user.input);

    if (user.input == goods){
    	inquirer.prompt([{
    		type: 'input',
    		name: 'quantity',
    		message: 'How many would you like to purchase?'
    	}])
    }

