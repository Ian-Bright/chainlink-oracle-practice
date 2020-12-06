const Migrations = artifacts.require('Migrations')
// const PriceConsumerV3 = artifacts.require('PriceConsumerV3')
// const RandomNumberConsumer = artifacts.require('RandomNumberConsumer')
const APIConsumer = artifacts.require('APIConsumer')

module.exports = deployer => {
    deployer.deploy(Migrations)
    // deployer.deploy(PriceConsumerV3)
    // deployer.deploy(RandomNumberConsumer)
    deployer.deploy(APIConsumer)
}