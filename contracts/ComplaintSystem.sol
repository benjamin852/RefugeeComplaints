pragma solidity ^0.4.21;

/*
Election contract that allows the owner to issue voting rights
to anybody and also end the election and announce results
*/
contract ComplaintSystem {
    enum State { REGISTERED, INPROGRESS, NOT_GUILTY, GUILTY}
    struct Complaint {
        string description;
        address accuser;
        address violator;
        State status;
        uint id;
    }

    address public owner;
    string public conflictArea;

    mapping(address => uint[]) violatorToGuiltyComplaints;
    mapping(address => uint[]) accuserToComplaints;
    Complaint[] public complaints;
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function ComplaintSystem (string _conflictArea) public {
        owner = msg.sender;
        conflictArea = _conflictArea;
    }
    
    function addComplaint(string _description, address _violator) public {
        uint id  = complaints.length;
        complaints.push(Complaint(_description, msg.sender, _violator, State.REGISTERED, id));
        accuserToComplaints[msg.sender].push(id);
    }
    
    function getMyComplaints() public view returns(uint[]) {
        return accuserToComplaints[msg.sender];
    }
    
    function getViolations(address _violator) public returns(uint[]) {
        return violatorToGuiltyComplaints[_violator];
    }
    
    function changeComplaintState(State _status, uint _id) onlyOwner public {
        if (_status == State.GUILTY) {
            if (complaints[_id].violator != 0) {
                violatorToGuiltyComplaints[complaints[_id].violator].push(_id);
            }
        }
        complaints[_id].status = _status;
    }
    
    function updateViolator(uint _id, address _violator) public {
        require(msg.sender == owner || msg.sender == complaints[_id].accuser);
         complaints[_id].violator = _violator;
    }
    
    
    // string violaterHash;
    // string violaterName;
    
    // function registerViolater(string hashOfViolater) {
    //     violaterHash = hashOfViolater;
    // }
    
    // function revealViolater(string name) {
    //     //check state of complaint is guilty
    //     string hash = SHA256(name);
    //     if (hash == violaterHash) {
    //         violaterName = name;
    //     }
    // }
    
}
