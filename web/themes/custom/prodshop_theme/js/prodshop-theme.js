/**
 * @file
 * prodshop_theme behaviors.
 */
(function (Drupal, tailwind) {

  'use strict';

  Drupal.behaviors.prodshopTheme = {
    attach (context, settings) {

      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'dark-blue': '#0e1c2f',
              'accent-green': '#b4ff39',
            }
          },
          container: {
            screens: {
              'sm': '640px',
              'md': '768px',
              'lg': '1024px',
              'xl': '1280px',
            }
          }
        }
      }
    }
  };

} (Drupal, tailwind));
