Django + React app for a users list.
  
# Deployment steps
 
## Using Docker Compose
 
* Ensure you have `docker-compose >= 1.2.x` installed.
* Run `docker-compose` instance inside root directory.
```
$ docker-compose up
```
* Open your browser at [https://localhost:8000](https://localhost:8000)
  
## Deploy locally

### Setup Postgres database

Inside yout shell session for the `postgres` user:

* Log into Postgres:
```
$ psql
```
* Create a database for the application:
```
psql> CREATE DATABASE userslist;
```
* Create a user for the database;
```
psql> CREATE USER listdbuser WITH PASSWORD '<your-pass>';
```
* Some settings that Django expects:
```
psql> ALTER ROLE listdbuser SET client_encoding TO 'utf8';
psql> ALTER ROLE listdbuser SET default_transaction_isolation TO 'read committed';
psql> ALTER ROLE listdbuser SET timezone TO 'UTC';
```
* Gran privileges to the user:
```
psql> GRANT ALL PRIVILEGES ON DATABASE userslist TO listdbuser;
```
* Exit from Postgres
```
\q
```


### Setup Django app
* Create a virtualenv:
```
$ python3 -m venv venv
```
* Activate the virtualenv
```
$ source venv/bin/actiave
```
* Install python requirements
```
(env)$ pip install -r requirements.txt
```
* Create the `local_settings.py` in `django_app/users_list/` with your Postgres database credentials:
```{python}
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'userslist',
        'USER': 'listdbuser',
        'PASSWORD': '<your-pass>',
        'HOST': 'localhost',
        'PORT': 5432,
    }
}
```

* Run migrations:
```
(env)$ python django_app/manage.py migrate
```
* Run webserver:
```
(env)$ python django_app/manage.py runserver
```
* Open your browser at [https://localhost:8000](https://localhost:8000)


## Deploy React app

All the static files are already deployed as Django static files, but you can do it yourself if you want.

* Esure you have `npm >= 6.9.x` installed.
* Inside the `front/` folder run:
```
$ npm install
```
* Run the deployment script:
```
$ ./deploy.sh
```

# What would I do in a production environment

1. Run the application as a [WSGI application](https://www.python.org.ar/wiki/WSGI) with [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/)
2. Run uWSGI as a daemon or behind a process control like [Supervisor](http://supervisord.org/).
3. Setup a web server like [NGINX](https://www.nginx.com/) to expose the application with some SSL certificate.
4. Setup a DNS address that points to the server.
5. Ensure that the application can be observable through the webserver and application's logs.





