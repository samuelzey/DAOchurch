// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

//When a community wants to own its own contract, they can delpoy this contract by themselves, one contract serves one DAO.

contract voting is Ownable{
    //To store a voter in certain proposal
    address ERC20addr = 0xb9efd1AC2044CF7b9f9C01026fD9a0292EC5E9Ac;
    IERC20 DCT = IERC20(ERC20addr);
    function rewriteERC20addr(address NewERC20addr) public onlyOwner{
        DCT = IERC20(NewERC20addr);
    }
    
    struct voter{
        address voterWalletAddress;
        uint votingPower;//TBD
        mapping(uint => bool)voted;
        uint POCpoints;
    }
    
    //To store a proposal
    struct proposal{
        uint proposalID;
        string title;
        string votingType;
        string votingDetails;
        uint withdrawAmount;
        address votingCreator;
        address votingReceiver;
        uint votingStatus;
        uint proposalCreateTime;
    }
    
    //To store the voting result
    struct votingResult{
        uint votePos;
        uint voteNeg;
        address[] votersAddress;
    }
    
    //To store info of DAOs
    struct DAOinfo{
        string DAOName;
        string DAODetail;
        address[] DAOMenber;
    }//TBD
    

    proposal[] public proposals;
    DAOinfo public myDAOinfo;//Change to internal later
    
    //find voters using his address
    mapping(uint => votingResult)resultMapping;
    //find user's voting info using his address
    mapping(address => voter)user;
    //find out whether one is a DAO member
    mapping(address => bool)DAOMemberMapping;
    
    //To count the IDs of proposals
    uint internal proposalIDCount = 0;
    //The balance of the contract
    uint public DAOBalance = 0;

    event createProposalEvent(
        uint proposalID,
        string title,
        string votingType,
        string votingDetails,
        uint withdrawAmount,
        address votingCreator,
        address votingReceiver,
        uint votingStatus,
        uint proposalCreateTime
        );
        
    event votingEvent(
        address votersID,
        bool choice,
        uint votingTime
        );
        
    constructor(){
        DAOMemberMapping[msg.sender] == true;
    }
    
    //To make sure one is in the DAO
    modifier onlyDAOMenber{
        require(DAOMemberMapping[msg.sender] == true,"You are not a DAO menber!");
        _;
    }
    
    
    //create a DAO, which means only the contract owner can use it for the first time.
    function createDAO(string memory _DAOName,string memory _DAODetail)public onlyOwner returns(bool){
        myDAOinfo.DAOName = _DAOName;
        myDAOinfo.DAODetail = _DAODetail;
        return true;
    }//TBD
    
    //Add one DAO member
    function addDAOMember(address _memberToAdd)public returns(bool){
        myDAOinfo.DAOMenber.push(_memberToAdd);
        DAOMemberMapping[msg.sender] = true;
        return(true);
    }
    
    //Quit a DAO
    function quitDAO()public returns(bool){
        uint i;
        uint k=0;
        for(i=0;i<myDAOinfo.DAOMenber.length;i++){
            if(myDAOinfo.DAOMenber[i]==msg.sender){
                myDAOinfo.DAOMenber[i] = 0x0000000000000000000000000000000000000000;
                k = 1;
            }
        }
        if(k==1)return true;
        else return false;//There is no such member
    }
    
    //Return the amount of proposals
    function getProposalsAmount()public view returns(uint){
        return proposals.length;
    }
    
    //Return all info of the proposal
     function getProposal()public view returns(proposal[] memory){
         return proposals;
     }
     
    //Create a proposal, return whether it success of not
    function createProposal(string memory _title,string memory _votingDetails,uint _withdrawAmount,address _votingReceiver)public onlyDAOMenber returns(bool) {
        proposal memory proposalToCreate;
        proposalToCreate.proposalID = proposalIDCount;
        proposalToCreate.title = _title;
        proposalToCreate.votingType = 'Finance';
        proposalToCreate.votingDetails = _votingDetails;
        proposalToCreate.withdrawAmount = _withdrawAmount;
        proposalToCreate.votingCreator = msg.sender;
        proposalToCreate.votingReceiver = _votingReceiver;
        proposalToCreate.votingStatus = 1;
        proposalIDCount++;
        emit createProposalEvent(
            proposalToCreate.proposalID,
            _title,
            proposalToCreate.votingType,
            _votingDetails,
            _withdrawAmount,
            msg.sender,
            _votingReceiver,
            proposalToCreate.votingStatus,
            proposalToCreate.proposalCreateTime = block.timestamp
            //proposalToCreate.votersAddress
            );
        proposals.push(proposalToCreate);//push it into proposals
        return true;
    }
    
    //To vote for a proposal
    function vote(uint _proposalID,bool _choice)public  onlyDAOMenber returns(bool){
        require(proposals[_proposalID].votingStatus == 1,"The proposal is not active!");
        require(user[msg.sender].voted[_proposalID] == false,"You have voted for this proposal");//Make sure one can only vote once for each proposal
        uint votingPower = user[msg.sender].votingPower;
        if(_choice == true)resultMapping[_proposalID].votePos += votingPower;//According to user's voting power to add
        if(_choice == false)resultMapping[_proposalID].voteNeg += votingPower;
        resultMapping[_proposalID].votersAddress.push(msg.sender);
        user[msg.sender].voted[_proposalID] = true;
        emit votingEvent(
            msg.sender,
            _choice,
            block.timestamp
            );
        user[msg.sender].voted[_proposalID] = true;
        return true;
    }
    
    //To obtain the voting result
    function getVotingResult(uint _proposalID)public view returns(uint,uint){
        return(resultMapping[_proposalID].votePos,resultMapping[_proposalID].voteNeg);
    }
    
    //return the amount of menbers in a DAO
    function getMenberAmount()public view returns(uint){
        return myDAOinfo.DAOMenber.length;
    }
    
    //return the balance of contract
    function getDAOBalance()public view returns(uint){
        return address(this).balance;
    }
    
    //When voting ends
    function votingEnds(uint _proposalID)public returns(bool){
        DAOBalance-=proposals[_proposalID].withdrawAmount;
        withdrawDCT(proposals[_proposalID].votingReceiver,proposals[_proposalID].withdrawAmount);
        proposals[_proposalID].votingStatus = 0;
        return true;
    }
        
    //withdraw DCT out of contract(assume that there is only 1 assect in contract)
    function withdrawDCT(address _to,uint _payAmount)public{
        require(DAOBalance >= _payAmount,"Insufficient balance in DAO!");
        DCT.transfer(_to,_payAmount);
    }
    
    //find one's voting power
    function getVotingPower()public view returns(uint){
        return user[msg.sender].votingPower;
    }
    
    //approve and stake DCT into contract(assume that there is only 1 assect in contract)
    // function approveDCT(uint _spendAmount) external{
    //     DCT.approve(address(this), _spendAmount);
    // }
    function DCTallowance() external view returns (uint256){
        return DCT.allowance(msg.sender,address(this));
    }
    function stakeDCT(uint _amount)external payable{
        DCT.transferFrom(msg.sender,address(this),_amount);
        DAOBalance += msg.value;//value must be DCT
        user[msg.sender].votingPower+=msg.value;
    }
}