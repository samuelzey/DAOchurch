DAO.church is a DAO framework for DeFi projects on Nervos.
On http://dao.church/daos.html , A DAO member can vote or participate in the DAO. We use several way to calculate the votingPower of a DAO member instead of using on token balance.

We have 3 main contracts right now, 
dct.sol, which create DAOchurch Token.
bountList.sol, which serves the BOUNTIES part.
voting.sol, which serves the VOTING part.

One can do following things on DAO.church(some lack of frontend，you can check it in .sol files):
1. Create a DAO
2. Add members into DAO
3. Stake DCT into DAO 
4. Withdraw DCT out of DAO

Governence:
1. Create a proposal
2. Vote for a proposal
3. Quit a DAO
4. See the proposal contents/voting results on dao.chruch

Proof of contribution(Bounty):
1. Create a bounty
2. Apply for a bounty
3. Submit one's work
4. Confirm one's work and pay by smart contract
5. See the bounty contents/submitted work on dao.chruch

------
Running react development server through the start script in package.json can run the entire DAPP properly.
For the web pages deployed on the server, we encountered some packaging problems of Polyjuice / Web3 and other packages, the files built by webpack can not operate normally. Therefore, we have deployed the web pages that can only call contracts on the production server, that is, only display contract data. We build cli tools to users to enable users to operate contracts, that is, send transactions to contracts