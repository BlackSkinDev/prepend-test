
# Task Management App 
> A Pokemon app that allows users to view and edit pokemons

## Description
This project was built with React,Laravel and MYSQL .

##### Integration testing :
- PHPUnit (https://phpunit.de)
- Faker (https://github.com/fzaninotto/Faker)

## Running the App
To run the App, you must have:
- **PHP** (https://www.php.net/downloads)
- **PostgreSQL** (https://www.mysql.com/downloads/)

Clone the repository to your local machine using the command
```console
$ git clone *remote repository url*
```

Create an `.env` file using the command. You can use this config or change it for your purposes.

```console
$ cp .env.example .env
```


### Environment
Configure environment variables in `.env` for dev environment based on your MYSQL database configuration

```  
DB_CONNECTION=<YOUR_MYSQL_TYPE>
DB_HOST=<YOUR_MYSQL_HOST>
DB_PORT=<YOUR_MYSQL_PORT>
DB_DATABASE=<YOUR_DB_NAME>
DB_USERNAME=<YOUR_DB_USERNAME>
DB_PASSWORD=<YOUR_DB_PASSWORD>
MIX_APP_USER_USERNAME=  - Basic Auth username
MIX_APP_USER_PASSWORD=  - - Basic Auth password
MIX_API_URL= < Base url for Laravel API e.g  http://localhost:8000/api  or http://app.test/api (Provided you use Laravel Valet)**>
```

### LARAVEL INSTALLATION
Install the dependencies and start the server and run app setup command

```console
$ composer install
$ php artisan key:generate
$ php artisan project:init - This seeds database and perform other important operations
$ php artisan serve - If you use valet just hit (http://app.test/api i.e your valet link)
```

### REACT INSTALLATION



Install the dependencies and start the server

```console
$ npm install && npm run dev
```


## Basic Auth Credentials
- Username - dev_afeez 
- Password - password



You should be able to visit your app at your laravel app base url e.g  http://localhost:8000  or http://app.test (Provided you use Laravel Valet).


## Assumptions/Suggestions
While creating the app the following Assumptions were made
- I ordered Pokemons using the "Order" attribute (when being returned to frontend). I also assumed order property is unique for all pokemons. 
-  I assumed species_id is a sort of foreign key, Hence, I didn't make it editable  
-  Since I ordered pokemons being sent to frontend using "order" column, I made it not editable. Updating the order is however acheivable but with it's own logic. An example way is to implement drag and drop such that pokemons excahnge order numbers 
- I also assumed is_order is a tinyInteger
- I also implemented an artisan command that reads the pokemons csv data provided and import the data inside it into my db (I limited the pokemons returned to 100).
- In the future, For nice user experience,Pagination can be implemented to easily navigate through the pokemons

