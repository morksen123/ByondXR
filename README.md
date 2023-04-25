# Candidate assessment

## How I approached the task

1. Set up the backend (localhost:4000)
2. Tested queries/mutations on Apollo playground
3. Set up the frontend (localhost:3000)
4. Tested endpoints from frontned and checked if the data was saved in mongoDB
5. Enhance UI 

## What went well
1. Maximised component based architecture of React
2. Enhanced Material UI components (Drawer, appbar, etc.)
3. Utilised Apollo playground for testing before implementation 
4. Used a combination of MongoDB Atlas, compass and Apollo playground to visualise data
5. Utilised interfaces in both frontend and backend


## Challenges
1. Hardcoded some component props due to incomplete website architecture. E.g, ```<Showroom name="my showroom"/>```
2. Configuration and importing the required packages for the server was time consuming
3. Code organisation of graphql code can be neater
4. I was unable to fully implement the user activity tracking feature by the deadline
    - Currently, the mutation function to create a UserActivity document works (tested with dummy data on the frontend)
    - However, I have not found an effective method of tracking the user activity data
    - These are the 2 approaches I have attempted:
        - Approach 1: Used an event listener but it ended up logging too much info
        - Approach 2: Utilised onClick function of component to call the endpoint 
   

## Summary 
Overall, it was a fun assignment! Throughout these 2.5 days, I learnt a lot about graphql and its difference from RESTful APIs. 
I would love to hear your feedback on my work and how I can improve as an engineer :-)
