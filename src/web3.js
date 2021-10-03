import Web3 from "web3";

let web3;

if (typeof window !== 'undefined') {
    //we are in the browser and Metamask is already installed
    window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
} else if (typeof window.web3 !== 'undefined') {
    // we are on server or user is not running Metamask
    window.web3 = new Web3(window.web3.currentProvider)
} else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
}

export default web3;