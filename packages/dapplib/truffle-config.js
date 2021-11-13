require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food green remember stick arrow coral light army genius'; 
let testAccounts = [
"0x1a7aa4a0278d1b44440da6c7f7991d3af093e96dbb32f957bce7ea9b8edb64dd",
"0xb1d92399c75b0248480120c407730637a510d5aa1a7c9ee2cae02ddec6fca60f",
"0xb7fbc1ced5a53da220c5ad95fdc95e35e903e4e1ea7aa3db65182f02740e7e1c",
"0x875157707b340ee325ecc7fe65b7c8d2359f7377237fb179e0f09061a1a8b919",
"0x56a244eafceae7d2d05a239e6ed3278f5ed21f1aeb81d1278b8d4feefcae9ab6",
"0x02dcf8828b3f830056f39c14f27509e2265b4a2f77740ba35e9aaf497340542a",
"0x26621e336eb71796a2bb0d138a4fab860ed88b767442863f7781fb3e95b610e5",
"0xb230cd21e8043beef08f1dbecebf856a2e0eba6586a904e6c9e36597b834c9c1",
"0xd2a426df42674ce108ac73832ef2186df1ddc5fa96820560d486f5a9fe3f0aa3",
"0x4eb5b1c69edbc6ea51d5f0ea4e8f6329458172b9332c86712b75f31640b33bf0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

