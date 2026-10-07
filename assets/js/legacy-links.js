/*
 * Old links into the previous guides sites keep working once guides.yclas.com points here:
 *   guides.yclas.com/#/Settings-general          (docsify, 2020–2022)
 *   guides.yclas.com/docs/settings-categories/   (Jigsaw, 2022)
 * Both land on this home page (hash) or the 404 page (path). Known pages go to their new article; anything else
 * opens search with the old page name.
 */
(function () {
  'use strict';
  var map = {
    'settings-general': '/change-site-name-site-description/',
    'settings': '/change-site-name-site-description/',
    'settings-location': '/how-to-add-locations/',
    'settings-categories': '/how-to-add-categories/',
    'classifieds-add-location': '/how-to-add-locations/',
    'classifieds-how-to-add-new-categories-and-manage-them': '/how-to-add-categories/',
    'classifieds-manage-advertisements': '/how-to-manage-advertisements/',
    'classifieds-coupon-system': '/how-to-use-coupon-system/',
    'classifieds-add-icons-to-categoires': '/how-to-add-icons-to-categories/',
    'classifieds-how-to-import-tool-for-categories-and-location': '/use-import-tool-categories-locations/',
    'classifieds-flag-ads-as-inappropriate': '/flag-ad-inappropriate/',
    'classifieds-hide-categories': '/how-to-add-categories/',
    'classifieds-mark-image-as-primary': '/how-to-configure-image-settings/',
    'classifiedes-how-to-manage-orders': '/how-to-manage-orders/',
    'orders': '/how-to-manage-orders/',
    'advertisement': '/how-to-configure-publish-options/',
    'advertisement-ad-expiration': '/ad-expiration/',
    'advertisement-review-system': '/review-system-works/',
    'advertisement-thanks-page': '/thanks-page/',
    'users-manage-users': '/manage-users/',
    'users-how-do-roles-work': '/roles-work-classified-ads-script/',
    'users-create-custom-field-for-users': '/users-custom-fields/',
    'users': '/manage-users/',
    'plugins-membership-plans-to-post': '/membership-plans/',
    'plugins-forum-section': '/add-forums-section/',
    'plugins-login-using-social-auth': '/how-to-login-using-social-auth-facebook-google-twitter/',
    'addons': '/addons/',
    'extras-how-to-set-crons': '/how-to-set-crons/',
    'extras-how-to-import-advertisements': '/how-to-import-ads/',
    'extras-create-site-map': '/sitemap-classifieds-website/',
    'themes-how-to-change-a-theme': '/how-to-change-theme/',
    'themes': '/how-to-change-theme/',
    'appearance': '/theme-options/',
    'design': '/how-to-change-theme/',
    'appearance-custom-css': '/how-to-use-custom-css/',
    'email-settings-smtp-configuration': '/smtp-configuration/',
    'email-settings-elasticemail': '/configure-elasticemail-yclas/',
    'email-settings': '/general-email-configuration/',
    'custom-fields': '/how-to-create-custom-fields/',
    'custom-fields-sell-digital-goods': '/sell-digital-goods/',
    'custom-fields-vehicle-data': '/vehicle-data/',
    'auto-data-api': '/vehicle-data/',
    'translations': '/how-to-change-language/',
    'tools': '/tools-overview/',
    'import-users': '/how-to-import-users/',
    'migration': '/how-to-migrate-osclass-to-yclas/',
    'optimizde-database': '/tools-overview/',
    'security-two-step-sms-authentication': '/2-step-sms-authentication/',
    'security-two-step-authentication': '/2-step-authentication/',
    'security-how-to-set-up-recaptcha-on-your-site': '/set-recaptcha-website/',
    'security-avoid-spam-on-your-site': '/how-to-avoid-spam-in-my-site/',
    'publish-options-configure-google-maps-settings': '/how-to-configure-Google-Map-Settings/',
    'publish-options-active-comments-with-disquse': '/how-to-activate-comments-with-disqus/',
    'payment-pay-directly-from-the-ad-option': '/pay-directly-from-ad/',
    'payment-marketplace-with-escrow': '/escrow-pay/',
    'payment-settings': '/setup-payment-gateways/',
    'payment-2checkout-configuration': '/other-payment-gateways/',
    'integrations-cloudinary': '/cloudinary/',
    'integrations': '/addons/',
    'general-user-must-verify-email': '/registration-and-login/',
    'general-add-tracking-codes': '/how-to-add-tracking-codes/',
    'general-algolia-search': '/algolia-search/',
    'general-maintenance-mode': '/how-to-activate-maintenance-mode/',
    'general-cookie-consent': '/cookie-consent/',
    'content': '/how_to_add_pages/',
    'content-send-a-newsletter': '/how-to-send-the-newsletter/',
    'content-create-an-interactive-map': '/how-to-add-interactive-map/',
    'content-add-pages': '/how_to_add_pages/',
    'content-automatic-emails-sent-to-users': '/automatic-emails-sent-to-users/',
    'yclas-self-hosted-installation-insatallation': '/welcome/',
    'yclas-self-hosted-installation-how-to-update': '/welcome/',
    'yclas-self-hosted-installation': '/welcome/',
    'yclas-self-hosted-development': '/welcome/',
    'yclas-self-hosted-technical': '/welcome/',
    'api-documentation': '/api-documentation/',
    'home-how-to-use-yclas-support-system': '/use-yclas-support-system/',
    'panel-amin-keyword-shortcuts': '/admin-panel-tour/',
    'panel-site-advertising-stats': '/useful-statistics-about-your-advertisements/',
    'profile': '/how-to-edit-your-profile/',
    'license': '/welcome/',
    'technical-issues': '/troubleshooting/',
    'useful-articles': '/growth/',
    'classifieds': '/listings/',
    'extras': '/tools/',
    'content-new': '/content/',
    'readme': '/'
  };

  var key = null;
  var hash = window.location.hash || '';
  if (hash.indexOf('#/') === 0) {
    key = hash.slice(2);                                   // #/Settings-general?id=xyz
  } else if (window.location.pathname.indexOf('/docs') === 0) {
    key = window.location.pathname.replace(/^\/docs\/?/, ''); // /docs/settings-categories/
    if (!key) { window.location.replace('/'); return; }
  }
  if (key === null) return;

  key = decodeURIComponent(key.split('?')[0]).replace(/\/+$/, '').toLowerCase();
  if (!key) return;
  var target = map[key];
  if (!target) {
    // drop the old section prefix ("Users-", "Custom-fields-"...) and search for the rest
    var words = key.replace(/[-_]+/g, ' ').trim();
    target = '/?q=' + encodeURIComponent(words);
  }
  window.location.replace(target);
})();
