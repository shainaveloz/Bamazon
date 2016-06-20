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
                    var goods = res[i].ProductName}});

inquirer.prompt([
{
    type: "input",
    name: "input",
    message: "What is the ID of the product you would like to buy today?"
},

]).then(function(user){
    console.log(user.input);

    if (user.input == res[i].ItemID){
    	inquirer.prompt([{
    		type: 'input',
    		name: 'quantity',
    		message: 'How many would you like to purchase?'
    	}])
    }


//     switch(action.choices){
//         case 'Post':
//             inquirer.prompt([
//             {
//                 type: "input",
//                 name: "itemName",
//                 message: "What item are you posting?"

//             },
//             {
//                 type: "input",
//                 name: "itemPrice",
//                 message: "How much do you want for it?"
//             }
//             ])
//             break;

//         case 'Bid':
//         inquirer.prompt([
//             {
//                 type: "list",
//                 name: "itemList",
//                 message: "What item do you want?",
//                 choices: [goods]

//             },
//             {
//                 type: "input",
//                 name: "itemPrice",
//                 message: "How much do you want to bid?"
//             }
//             ])
//             break;


//     }


})

// connection.query('SELECT * FROM fave_music', function(err,res){
//     for(var i=0; i<res.length; i++){
//         console.log(res[i].id+" | " res[i].title+ "|" +res[i].artist)+ "|"+res[i].genre
//     }
// })

// connection.query('SELECT * FROM products', function(err, res){
//     if (err) throw err;
//     console.log(res);

// })