# VOT - Built With Filecoin, Recall and Akave for Decentralised Storage System With Langchain AI

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





