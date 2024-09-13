# Productive Shop

### To launch using ddev:
```bash
ddev start
ddev composer install
ddev drush si -y minimal --account-pass=admin --existing-config --config-dir="../config/sync"
ddev drush uli
