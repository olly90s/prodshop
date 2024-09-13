```bash
ddev start
ddev composer install
ddev drush si -y minimal --account-pass=admin --existing-config --config-dir="../config/sync"
ddev launch
