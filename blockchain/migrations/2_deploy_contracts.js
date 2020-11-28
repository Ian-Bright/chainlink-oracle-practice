const Migrations = artifacts.require('Migrations')
const PriceConsumerV3 = artifacts.require('PriceConsumerV3')

module.exports = deployer => {
    // deployer.deploy(Migrations)
    deployer.deploy(PriceConsumerV3)
}