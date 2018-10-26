/* 
* Experimental: Still in draft (Stage 3)
* The Array.prototype.flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
* var newArray = arr.flat([depth]);
* 
* 
* Array.prototype.flatmap = Same as running map and then flattening all results into a new single array.
* Array.prototype.flatMap ( mapperFunction [ , thisArg ] )
*/ 

var arr1 = [1, 2, [3, 4]];
arr1.flat();  // [1, 2, 3, 4]

var arr4 = [1, 2, , 4, 5]; // Array hole
arr4.flat(); // [1, 2, 4, 5]


const orders = [ 
	{	
		orderId: 42, 
		items: [ 
			{name: "soap", price: 1.99},
			{name: "shampoo", price: 1.99},
		]
	},
    {
        orderId: 1332,
        items: [
            { name: "toothpase", price: 3.50},
            { name: "toothbrush", price: 8.99}
        ]
	}
];

const items = orders.flatMap(i => i.items.map(i => i.name));
