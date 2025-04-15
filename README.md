# VOT - Built With Filecoin, Recall and Akave for Decentralised Storage System With Langchain AI


## MUST READ! * OVERVIEW OF HOW VOT REALLY WORKS!

VOT uses allows usersto autheticate using their wallet or email, which registers each users and allow them to access the website. There are three categories of users on VOT - 'the Election Creators(Admins)', 'the Election Contestants' and the 'Voters'. Each users has the ability to be in any of these categories but there are rules attached to it:

1. When an election is created, the election creator cannot contest or vote in the election - this is to ensure fairness and avoid activities that annoys the algorithm and users.
2. Election contestants are allowed to contest in any election they desire, but can not vote for any election that they register as a contestant for.
3. Users has the ability to join any election as a contestant and also be a voter in another election entirely.
4. Voters are free as a bird. 

VOT charges per election created and per election you apply for as a contestant, this is to ensure vain use of the website. This is acheived through the aid of Filecoin as the native base token for transaction. But again, voters are free as a bird.

VOT stores each election data - contestant information(formated from the admin requirements), election results, every data of each election created and more... These data are being stored on the Recall Blockchain and Akave blockchain and can be queried or download by anyone interested in any information ot result of a specific election through the election ID that will be generated. 


## A Decentralised Voting System That Stores Users and Election Data On Blockchain

This project contains the whole code for VOT project and this utilises Langchain AI, Recall Blockchain Storage, Akave Blockchain Storage and Filecoin Ecosystem together to acheive the goal of decentralising election system. Each part of this project has been structured seperately to show how we utilised each of the tecnologies:

*  How we integrated the Recall feature to establish direct data storage integration
*  Langchain chat model with the aid of OpenAI to take users input data and convert it to a .txt file that will be automatically uploaded to Akave blockchain
*  Akave - which serves as the base model for uploading and downloading elections and users data
*  Filecoin - this served as the token(currency) that we used for charging the election creators and election contestants
*  How we utilised each storage ecosystem with the Langchain AI.

## You can Watch The Audio and Visual Explanation of How VOT Works
<a href="https://youtu.be/YaZZEnK8YTo" target="_blank">Learn More About VOT</a>

## How To Start Langchain AI, Recall and Akave in The Project

1. Clone the project `git clone https://github.com/Nailer/VOT.git` 
2. Run `pnpm install` to install the necessary packages
3. Run `pnpm run dev` to start the UI of the website.
4. Run `pnpm tsx lib/LangChainServer`, `pnpm tsx lib/agent.ts`

* Note: Make sure you have the necessary environment set for proper deployment and interaction with VOT project
* Ensure that your OpenAI key has enough credit to troubleshoot `billing error` and `too many request error`

## Found a Bug? VOT is Open For Collaborations

Please if you find any bug or want to collaborate on VOT, you can update the section that you want to add your contribution and please feel free to submit a pull request for a review. Thanks.

## Known Issue(In Progress)

1. Unfinished frontend pages - Create Election page, Join Election page...
2. Incomplete Filecoin transaction integration per action made relative to election activities.
3. Recall autonomous uploading of file through AI.

## What's next for VOT(coming soon...)

1. Integrate ElizaOS AI for seamless direct posting to social media directly from VOT for campaign advantage to election contestants.
2. Implementation of signature binding to restrict cheating by creating multiple accounts from their wallets.

## Like this Project?

If you are feeling generous, you can buy me a coffee <a href="https://buymeacoffee.com/sukunanpm" target="_blank">here</a> 

## For Documentation of Technologies Used
1. <a href="https://docs.filecoin.io/smart-contracts/fundamentals/the-fvm">Filecoin</a>
2. <a href="https://docs.akave.ai/js-docker-example-code">Akave</a>
3. <a href="https://docs.recall.network/quickstart">Recall</a>



