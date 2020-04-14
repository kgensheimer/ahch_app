# AHCH Information Management System Web Application
This project is a Stevens senior design project with the goal of creating a new case and information management system for the staff at Audrey Hepburn Children's House at Hackensack University Medical Center.


# Installing & Running

First download the code as a zip folder and place where you see fit

Then install node.js at https://nodejs.org/en/download/

Once Node.js is installed, go to your terminal and navigate to the folder with the project in it and run
```
npm install
```
This will install all of the dependencies for the project

To start the application, go to your terminal and navigate to the folder with the project in it and run
```
npm start
```
This starts a server and listens on port 3000 for connections.
Then, load http://localhost:3000/ in a browser to see the output.

## Folder/File Structure

```
Files:
app.js; initializes and runs the server.
package.json; describes the application and its dependencies.

Folders:
node_modules/; stores all the dependencies.
routes/; contains all of the routing scripts.
data/; contains all of the database access modules.
config/; stores all the configuration settings.
views/; contains the HTML/Habdlebars templates and layouts.
static/; for static assets such as non-dynamic web pages.
public/; for public assets (stylesheets, images, JS)
tasks/; contains any setup scripts like seed.js to seed the database
```

## Authors

* **Kyle Gensheimer** 

See also the list of [contributors](https://github.com/kgensheimer/ahch_app_new/graphs/contributors)

## License

MIT

## Acknowledgments