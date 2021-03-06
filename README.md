# Whats Buzz

[![license][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![Python 3][python-image]][python-url] [![Updates][updates-image]][updates-url] [![Donate][donate-image]][donate-url]

Something about the project.

## Our Stack

  * [Angular](https://angular.io/)
  * [Django](https://www.djangoproject.com/)
  * [PostgreSQL](http://www.postgresql.org/)

**Tools we use**

  * [Bootstrap](http://getbootstrap.com/)
  * [Angular-CLI](https://cli.angular.io/)
  * [ngrx](https://github.com/ngrx)
  * [Google Cloud Platform](https://cloud.google.com/)
  * [Facebook API](https://developers.facebook.com/)

## Pre Requirements

  1. Make sure you have Python 3.x and pip installed.
  2. [NodeJS](nodejs.org).
  3. [Angular CLI](https://github.com/angular/angular-cli).
  4. [Google Cloud Platform](https://cloud.google.com/).

## Installation

**Client**

  1. `npm install` inside the `client` directory.
  2. Open the browser at [http://localhost:4200](http://localhost:4200).

**Server**

  1. Install requirements with `pip install -r requirements.txt` (located under `server` directory).
  2. `cd server/config` then `cp local_settings.template local_settings.py` and modify it by your local settings.
  3. Migrate the data with `python manage.py migrate`.
  4. Import the dummy data with `python manage.py import_data`.
  5. Run the server with `python manage.py runserver`.
  6. Open the browser at [http://localhost:8000](http://localhost:8000).

## Tests

**Client**

  * Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
  * Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

**Server**

  * Run `pycodestyle --show-source --max-line-length=119 --exclude=server/whatsbuzz/migrations --show-pep8 server;` to check for PEP-8.

## Translation

**Client**

Run `npm run i18n` to create `xlf` files.

**Server**

To make new strings for translation use the command

```shell
python manage.py makemessages -l he
python manage.py compilemessages -l he
```

## Deploy

**Client**

  1. Build the project `ng build --prod --aot` inside the `client` directory.
  2. Run `firebase deploy` to deploy to deploy to Firebase.

**Server**

  1. Migrate the database `python manage.py migrate`.
  2. Create the admin user `python manage.py createsuperuser`.
  3. Gather all the static content locally into one folder `python manage.py collectstatic`.
  4. Make sure `STATIC_URL` point to your CGP CloudStorage.
  5. To make the bucket public `gsutil defacl set public-read gs://<your-gcs-bucket>`.
  6. Upload the static content to CloudStorage `gsutil rsync -R static/ gs://<your-gcs-bucket>/static`.
  7. Add your `SECRET_KEY` to `settings.py`.
  8. Make sure your don't have `server/config/local_settings.py` file.
  9. Deploy the app to CGP app engine `gcloud app deploy`.

[license-image]: https://img.shields.io/badge/license-ISC-blue.svg
[license-url]: https://github.com/nirgn975/WhatsBuzz/blob/master/LICENSE
[travis-image]: https://travis-ci.org/nirgn975/WhatsBuzz.svg?branch=master
[travis-url]: https://travis-ci.org/nirgn975/WhatsBuzz
[python-image]: https://pyup.io/repos/github/nirgn975/whatsbuzz/python-3-shield.svg
[python-url]: https://pyup.io/repos/github/nirgn975/whatsbuzz
[updates-image]: https://pyup.io/repos/github/nirgn975/whatsbuzz/shield.svg
[updates-url]: https://pyup.io/repos/github/nirgn975/whatsbuzz
[donate-image]: https://img.shields.io/badge/Donate-PayPal-lightgrey.svg
[donate-url]: https://www.paypal.me/nirgn/2
