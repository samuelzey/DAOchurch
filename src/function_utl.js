import Web3 from "web3";
import { PolyjuiceHttpProvider } from '@polyjuice-provider/web3';


const providerConfig = {
	web3Url: 'https://godwoken-testnet-web3-rpc.ckbapp.dev'
};
export const provider = new PolyjuiceHttpProvider(providerConfig.web3Url, providerConfig);
export const web3 = new Web3(provider);
export const contract = new web3.eth.Contract([
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
],'0xE3D649A442c223819020165ff903fCAc8c20Ad94')
export const contract_vote = new web3.eth.Contract([
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposalID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "votingType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "votingDetails",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "withdrawAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "votingCreator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "votingReceiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "votingStatus",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposalCreateTime",
				"type": "uint256"
			}
		],
		"name": "createProposalEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "votersID",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "choice",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "votingTime",
				"type": "uint256"
			}
		],
		"name": "votingEvent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_memberToAdd",
				"type": "address"
			}
		],
		"name": "addDAOMember",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_DAOName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_DAODetail",
				"type": "string"
			}
		],
		"name": "createDAO",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_votingDetails",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_withdrawAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_votingReceiver",
				"type": "address"
			}
		],
		"name": "createProposal",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "quitDAO",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "stakeDCT",
		"outputs": [],
		"stateMutability": "payable",
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
				"internalType": "uint256",
				"name": "_proposalID",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_choice",
				"type": "bool"
			}
		],
		"name": "vote",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalID",
				"type": "uint256"
			}
		],
		"name": "votingEnds",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_payAmount",
				"type": "uint256"
			}
		],
		"name": "withdrawDCT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "DAOBalance",
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
		"inputs": [],
		"name": "DCTallowance",
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
		"inputs": [],
		"name": "getDAOBalance",
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
		"inputs": [],
		"name": "getMenberAmount",
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
		"inputs": [],
		"name": "getProposal",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "proposalID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "votingType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "votingDetails",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "withdrawAmount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "votingCreator",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "votingReceiver",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "votingStatus",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "proposalCreateTime",
						"type": "uint256"
					}
				],
				"internalType": "struct voting.proposal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProposalsAmount",
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
		"inputs": [],
		"name": "getVotingPower",
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
				"name": "_proposalID",
				"type": "uint256"
			}
		],
		"name": "getVotingResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
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
		"inputs": [],
		"name": "myDAOinfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "DAOName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DAODetail",
				"type": "string"
			}
		],
		"stateMutability": "view",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "proposalID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "votingType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "votingDetails",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "withdrawAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "votingCreator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "votingReceiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "votingStatus",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "proposalCreateTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],'0xD9bA209C42BC6799665d79A3F0d29f3c3614682E')
export const eventList = {}
export const onloadEvent = []


window.onload = () => {
	window.ethereum.send('eth_requestAccounts').then((res) => {
		callEvent('connect', res.result[0]);
		contract.defaultAccount = res.result[0];
		window.account = res.result[0];
		onloadEvent.map((v) => v());
	});
	// web3.eth.getAccounts().then(e=>{
	// 	onloadEvent.map((v) => v());
	// 	window.account = e[0];
	// })
	// if (window.ethereum.isConnected()) {
	// 	callEvent('connect', window.ethereum.selectedAddress);
	// 	contract.defaultAccount = window.ethereum.selectedAddress;
	// }
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

export function connect() {
	window.ethereum.send('eth_requestAccounts').then((res) => {
		callEvent('connect', res.result[0]);
		contract.defaultAccount = res.result[0];
	});
}
