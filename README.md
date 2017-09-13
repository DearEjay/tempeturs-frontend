# Tempetürs Frontend

## Setup Instructions:

1. Download and Install Node.js and npm

    [Download Node.js](https://nodejs.org/en/download/) here which will also install npm.
    
    Check your installs with `node -v` and `npm -v`.

2. Clone the Repository

    Use the SSH link to download the repo using `git clone git@gitlab.com:fall17-group3/tempeturs-frontend.git`.
    
    **OR**
    
    Use the HTTPS link to download the repo using `git clone https://gitlab.com/fall17-group3/tempeturs-frontend.git`.
    
3. Install Dependencies 

    This command must be run every time you pull to download any new packages someone else may have added.
    
    Run `npm install` in the top level directory of the project (where `package.json` is) to install dependencies.
    
4. Build the Project


    Run `npm run build` to have webpack build its files.
    
    *Might change if I figure out a better way to serve files for the dev server without having to build first.
    
5. Run the Project


    Run `npm run dev` to run the project's dev server.
    
## Notes

When you push a commit, the project automatically tests a build and if it passes deploys to Heroku.

The structure of this repo is likely going to change as we learn more about good Node.js and React practices.


