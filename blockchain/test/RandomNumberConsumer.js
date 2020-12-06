const { expect } = require('chai')
const { BN, expectRevert } = require('@openzeppelin/test-helpers')
const RandomNumberConsumerContract = artifacts.require('./RandomNumberConsumer')
const IERC20 = artifacts.require('./IERC20')
require('dotenv').config()

contract('Random Number Contract Testing', (accounts) => {
    let instance, token

    // This is my funding account. Change it if you need to
    const funder = accounts[3]

    before(async () => {
        instance = await RandomNumberConsumerContract.at('0x29FF85352385fe52362E9983F93135deEcD9452f')
        console.log('ADDRESS: ', instance.address)
        token = await IERC20.at(process.env.CHAINLINK_KOVAN)
        await token.transfer(instance.address, web3.utils.toWei('1', 'ether'), {from: funder})
    })

    describe('getRandomNumber()', async () => {
       xit('Should fail because the contract does not hold LINK', async () => {

       })

       xit('Transfer', async () => {
           let instanceBalance = await token.balanceOf(instance.address)
           let funderBalance = await token.balanceOf(funder)
           console.log('INSTANCE: ', instanceBalance)
           console.log('FUNDER: ', funderBalance)
           await token.transfer(instance.address, web3.utils.toWei('1', 'ether'), {from: funder})
           instanceBalance = await token.balanceOf(instance.address)
           funderBalance = await token.balanceOf(funder)
           console.log('INSTANCE: ', instanceBalance)
           console.log('FUNDER: ', funderBalance)
       })
        
       it('Should return a valid number', async () => {
            await instance.getRandomNumber(5678910)
            let result = await instance.randomResult()
            console.log('RESULT NUMBER: ', BigInt(result))
            expect(result).to.be.a('number')
        })
    })
})