# tunnel-toby
symfony new my_project_directory --version=lts
composer require --dev symfony/maker-bundle
composer require doctrine/annotations
composer require symfony/webpack-encore-bundle
composer require symfony/twig-bundle
composer require symfony/asset
composer require symfony/swiftmailer-bundle
composer require symfony/mailer
composer require symfony/form
composer require symfony/validator
npm install
npm run watch

## DEPLOY
composer require symfony/apache-pack
heroku login -i
heroku git:remote -a tunnel-toby-wallet

echo 'web: heroku-php-apache2 public/' > Procfile (Save  Procfile as UTF-8)
git add Procfile
git commit -m "Heroku Procfile"

git push heroku main

`YOU MUST SET BUILD PACK : PHP`

