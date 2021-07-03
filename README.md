# bddsample

WebdriverIO with TypeScript [Cucumber Framework]

Pre-requisite :
1. Visual Studio Code
2. NodeJS - https://nodejs.org/en/download/

verify the version of node and npm
$ node -v
$ npm -v

Create setup and project :
1. create folder e.g. bddsample
2. go to project folder e.g. cd /var/bddtest/bddsample/
3. Initialise the project as Nodejs project , run the command in ../bddsample/ path
 $ npm init
 when below question is asked keep input as yes
 Is this OK? (yes) yes
 
 ![npm init](https://user-images.githubusercontent.com/86867719/124349053-e255f580-dc0a-11eb-8780-fda7cb647953.png)

 now you will see package.json inside bddsample project.

4. Go to https://webdriver.io/docs/gettingstarted
 to use  npm or Yarn to install the WebdriverIO test runner in your Node.js project.
 
 $ npm install @wdio/cli
 
 To Setup:WDIO Configuration Helper
 
 $ npx wdio config
 
5. To run the feature file in ../bddsample/ path run below command
 $ npx wdio run wdio.conf.ts
