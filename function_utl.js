const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract([
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bounty_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "hunter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "detail",
				"type": "string"
			}
		],
		"name": "BountyAbandon",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bounty_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "hunter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "Performance",
				"type": "string"
			}
		],
		"name": "BountyComplete",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"indexed": false,
				"internalType": "struct BountyList.MissionDetail",
				"name": "Mission",
				"type": "tuple"
			}
		],
		"name": "BountyConfirm",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bounty_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"name": "BountyIssued",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bounty_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "hunter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "detail",
				"type": "string"
			}
		],
		"name": "BountyTaken",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "MissionDetailList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "State",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Boss",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "Title",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Hunter",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "Detail",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ddl",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Performance",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "OtherReward",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Patch",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "MissionIDList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MissionID",
				"type": "uint256"
			}
		],
		"name": "abandonMission",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bosses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bountyOngoing",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bountyOngoing_NUM",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MissionID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Performance",
				"type": "string"
			}
		],
		"name": "completeMission",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MissionID",
				"type": "uint256"
			}
		],
		"name": "confirmMission",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMemberRecord",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "MissionID",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Role",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "state",
						"type": "uint256"
					}
				],
				"internalType": "struct BountyList.RelatedMissionBrief[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMissionBrief",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMissionList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hunters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "Title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Detail",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "issueMission",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MissionID",
				"type": "uint256"
			}
		],
		"name": "killMission",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MissionID",
				"type": "uint256"
			}
		],
		"name": "queryMissionDetail",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "NewERC20addr",
				"type": "address"
			}
		],
		"name": "rewriteERC20addr",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MissionID",
				"type": "uint256"
			}
		],
		"name": "takeMission",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "State",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Boss",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Hunter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Detail",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ddl",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Performance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OtherReward",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Patch",
						"type": "string"
					}
				],
				"internalType": "struct BountyList.MissionDetail",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferTo_DCT_Internal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
],'0x4E3Bc0bB0948600e70B741B8701EBA1a7E69Be5b')
const eventList = {}
const onloadEvent = []

window.c = contract;

window.onload = () => {
	onloadEvent.map((v) => v())
	if (window.ethereum.isConnected()) {
		callEvent('connect', window.ethereum.selectedAddress);
		contract.defaultAccount = window.ethereum.selectedAddress;
	}
}


function addEvent(e, f) {
	if (eventList.hasOwnProperty(e) && eventList instanceof Array) {
		eventList[e] = [...eventList[e], f]
	} else {
		eventList[e] = [f]
	}
}

function callEvent(e, ...p) {
	if (eventList.hasOwnProperty(e)) {
		eventList[e].map((i) => i(...p))
	}
}

function connect() {
	window.ethereum.send('eth_requestAccounts').then((res) => {
		callEvent('connect', res.result[0]);
		contract.defaultAccount = res.result[0];
	});
}


