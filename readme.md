# Visionary website

The Visionary project aims to find solutions to fix colors problems on the web. Currently the project put on the table 2 solutions : a Chrome extension and a guide for webdesigners.

Here is the repository of the end-users website of the project.

This website is currently available here https://www.colour-blindness.org/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

* Backend : the website is made in PHP with the MVC framework [FatFree](https://fatfreeframework.com/3.6/home)
* Frontend : the website is made with the CSS Framework [UIKit(v2)](https://getuikit.com/) (compile in SCSS)

```
Check the folder `./src`
```

### Installing

* Update/install FatFree

```
In the folder `./src`  :  `composer update `
```
* Launch Gulp

```
1. Locally go to the root folder of the repository `cd ~/path/to/folder`
2. Install Gulp `npm install gulp -g`
3. Install Gulp locally `npm install gulp --save-dev`
4. Instal specific modules (check the gulfile.js for more info) `npm install --save-dev`
5. Launch Gulp (will create a fresh version of the website into the /build folder and will launch browsersync) `gulp`
```

## Running the tests

Just save files, Gulp will look at the changes and compile a fresh version into the /build folder


## Deployment

Add a file called `project.json` on the root and add the lines :

```
{
	"project_name": "Visionary Website",
	"project_slug": "visionary-website",
	"mamp_install": "visionary.loc",
	"src_dir": "src/",
	"build_dir": "build/",

	"___comment": "// The git branch to commit to",
	"git_branch": "development",

	"___comment": "// ",
	"git_token" : "",

	"___comment": "// FTP for deployment",
	"ftp_host" : "",
	"ftp_port" : "",
	"ftp_user": "",
	"ftp_pass": "",
	"ftp_remote_path": "www/to/path/public/"
}
```

Fill in fields for the FTP deployment. Then release.

```
`gulp release`
```
## Built With

* [FatFree](http://www.dropwizard.io/1.0.2/docs/) - MVC Framework
* [UIKit](https://maven.apache.org/) - CSS Framework
* [Gulp](https://gulpjs.com/) - A toolkit for automating tasks in your development workflow


## Authors

* **Alexandre Plennevaux** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
* **Alexandre Plennevaux** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
* **Alexandre Plennevaux** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
* **Alexandre Plennevaux** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc



------------ OLD -----------------


## Développer
1. `gulp` pour créer une version fraîche du site dans le dossier build et lancer en browsersync.

## Livrer
Pour pusher une nouvelle version sur le serveur:
`gulp version:bump`  puis `gulp release`

## Maintenance
Dans le dossier `./src`  :  `composer update `
