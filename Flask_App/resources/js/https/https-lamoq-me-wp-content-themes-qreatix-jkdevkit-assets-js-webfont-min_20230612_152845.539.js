/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
jQuery(document).ready(function ($) {
  'use strict';

  const webfonts_handler = () => {
    if (jkd_webfonts.kits && jkd_webfonts.kits.length > 0) {
      let kits = jkd_webfonts.kits;
      for (let i = 0; i < kits.length; i++) {
        WebFont.load({
          typekit: {
            id: kits[i]
          }
        });
      }
    }
    if (jkd_webfonts.google_fonts && jkd_webfonts.google_fonts.length > 0) {
      let google_fonts = jkd_webfonts.google_fonts;
      WebFont.load({
        google: {
          families: google_fonts
        },
        loading: function () {},
        active: function () {},
        inactive: function () {},
        fontloading: function (familyName, fvd) {},
        fontactive: function (familyName, fvd) {},
        fontinactive: function (familyName, fvd) {}
      });
    }
    if (jkd_webfonts.custom_fonts && jkd_webfonts.custom_fonts.length > 0) {
      let custom_fonts = jkd_webfonts.custom_fonts;
      for (let i = 0; i < custom_fonts.length; i++) {
        WebFont.load({
          custom: {
            families: [custom_fonts[i].name],
            urls: [custom_fonts[i].file]
          }
        });
      }
    }
  };
  webfonts_handler();
});
/******/ })()
;