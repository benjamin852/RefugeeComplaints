import Web3 from 'web3';
export var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));



var address = '0x8cdaf0cd259887258bc13a92c0a6da92698644c0';
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_violator",
				"type": "address"
			}
		],
		"name": "addComplaint",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_status",
				"type": "uint8"
			},
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "changeComplaintState",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_violator",
				"type": "address"
			}
		],
		"name": "getViolations",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_violator",
				"type": "address"
			}
		],
		"name": "updateViolator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_conflictArea",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "complaints",
		"outputs": [
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "accuser",
				"type": "address"
			},
			{
				"name": "violator",
				"type": "address"
			},
			{
				"name": "status",
				"type": "uint8"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "conflictArea",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyComplaints",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var contract = new web3.eth.Contract(abi, address);
export default contract;
