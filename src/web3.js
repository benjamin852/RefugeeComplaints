//setup web3@1.0.0 with meta mask (outdated web3) provider
import Web3 from 'web3';


//Web3 = our local updated copy of web3
//window.web3.currentProvider = the provider from the outdated web3 given to us by metamask
const web3 = new Web3(window.web3.currentProvider);


export default web3; 
