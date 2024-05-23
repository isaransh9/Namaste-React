NPM does not have any full form. It just manages all the packages.
npm init will initialize the package.json which will store the basic metadata and packages or dependencies that we will use to build the application with their version.

Most important package that we will be using is bundler. 
What is bundler?
A bundler is a tool that takes all your JavaScript code, along with any other assets like CSS or images, and combines them into a single file (or a few files) that can be served to the browser.
Example : Webpack, parcel, veet are bundlers

create-react-app uses webpack behind the scenes
In our learnings, we will be using parcel. Command => npm i -D parcel
Why we have used -D ? => It will install the development dependency and normal dependencies are used at production level.
"parcel":"^2.8.3" => "^" means if any minor upgrade version is there then it will be installed
                     "~" means if any major upgrade version is there then it will be installed

What is package-lock.json ? what is the difference between package-lock.json and package.json ?
As soon as you install the first dependency you will notice package-lock.json will be created
Package-lock.json keeps the exact version of dependencies used in the application while package.json keeps approx version with "^" and "~". package-lock.json is an auto-generated file that provides a detailed, deterministic record of the dependency tree.
It locks down the specific versions of every installed package, preventing unintended updates.

What is transitive dependency?
Node_modules contain the database of all the packages or dependencies. Most heaviest thing on the planet is node_modules
As you will notice that after installing parcel, we get huge number of folders or dependencies in the node_modules folder including a single parcel folder. Actually, parcel have its own dependencies and those dependencies can have further dependencies. This is known as transitive dependencies.
Every package contains its own package.json file and install those dependencies like a chain reaction. (Dependency Tree)

Building app using parcel
Command => npx parcel HelloWorld.html (Entry file of your application)
What this npx do? => It basically executes the package. Here parcel is creating a server at localhost:1234 and hosting the application on the server. .parcel-cache folder will be created after the execution of the command.
Hosting application like this => http://127.0.0.1:5500/Episode%201/HelloWorld.html is not a good way
Instead host the application on the server => http://localhost:1234/

CDN links is not a good way to bring react and react-dom into the application.
Why? Bring react or fetching react code using link with take lot of time (costly operation)
     On upgradation of the react and react-dom packages you need to modify the CDN links.
Instead of CDN link, you can install react and react-dom package from npm

We get an error on this line =>  <script src="./App.js"></script>
Why? => Because browser treat this js file to be normal which cannot have import and export statements
Correction => <script type="module" src="./App.js"></script> we need to specify the type of file
You may get an error of node_modules => Delete parcel-cache and dist and run the parcel again

Features of parcel:
-Dev Build
-Local Server
-HMR=Hot Module Replacement (Automatically loads the module if any changes are made)
-File watching algorithm (Written in C++)
-Faster Build by Caching
-Image Optimization
-Minification of files
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential bundling => To support older browsers
-Diagnostic
-Better Error Handling
-Can provide https hosting
-Tree shaking - remove unused code for you
Read its documentation

To generate production build
Command => npx parcel build HelloWorld.html
You will get an error. In package.json just remove the "main":"App.js" because our entry point is HelloWorld.html
This will create 3 main files for html, css and js inside dist folder. This is the production level code.

Browserlist => Addition of this in package.json
"browserslist":[
    "last 2 versions"
  ]
Link : 

