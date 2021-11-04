require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note prefer purchase install ensure obscure virtual'; 
let testAccounts = [
"0x16160852b6268a1fc09f82add8696737a26ba13c228403a7d733b7ac88add742",
"0x6aa1b737620ecb829d7002c2d10e545fe480593053473fbac060f8792d6a242a",
"0xcb19ccd338e95adebe739fbaeaff241b59e10daa88f91854eb8b6f47b8f2cf8d",
"0x265384e28311974daabea6c167880a7ba6e6f0cbbaf159b7cfedf7a569a1b913",
"0x3c6591dd5a781589fa2414de4a20674af46989fb4356c1e0b52c87cdfecf2624",
"0xf89fa7c33190c0a6adb43af89e279d099f637a7bf914473453a71c80915a6f12",
"0xf3ee054d654ae54b3860931ebd70e5c37afe3afbbc10822feb306e88a5cf55a0",
"0xeabcdfed8d31e9417086f381e7b0b700717b04ca89e3806c174df004a01d3518",
"0x021be948185cbdb73542b8f90e8e3a61ad532681e2a48979d44a739cac64f8bc",
"0x2f067d5b4f0aa644371ca3c530f41e7f318ec2a1872c84b51d6ac0664e8f6d60"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


