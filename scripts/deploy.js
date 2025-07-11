const { ethers } = require("hardhat")

async function main() {
    const [deployer] = await ethers.getSigner();
    console.log("Deploying contracts with the account: ", deployer.address);

    const weiAmount = (await deployer.getBalance()).toString();
    console.log("Account balance: ", (await ethers.utils.formatEther(weiAmount)));

    const Token = await ethers.getContractFactory("SilverBullet");
    const token = await Token.deploy();

    console.log("Token address: ", token.address);
}

main()
    .then(() =>process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
})