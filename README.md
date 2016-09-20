OBS Shopify Theme [![Circle CI](https://circleci.com/gh/Organic-Beard-Supply/obs-shopify-theme.svg?style=svg)](https://circleci.com/gh/Organic-Beard-Supply/obs-shopify-theme)
=====================

Ways to Get Started
---------------------
- Download the [latest release](https://github.com/Organic-Beard-Supply/obs-shopify-theme/releases)
- Clone the repo `git clone https://github.com/Organic-Beard-Supply/obs-shopify-theme.git`
- Or install with [Bower](http://bower.io/) `bower install obs-shopify-theme`

Stores
---------------------
- [Production Store](https://organic-beard-supply.myshopify.com/): Buy actual products from Organic Beard Supply
- [Development Store](https://organic-beard-supply-dev.myshopify.com/): See what we're working on next. This is where we play :)

Basic structure
---------------
```
├── assets
│   └── Javascript, CSS, and theme images
├── layout
│   ├── theme.liquid
│   └── optional alternate layouts
├── snippets
│   └── custom code snippets
├── spec
│   └── tests and helpers
├── templates
│   ├── 404.liquid
│   ├── article.liquid
│   ├── blog.liquid
│   ├── cart.liquid
│   ├── collection.liquid
│   ├── collection.list.liquid
│   ├── index.liquid
│   ├── list-collections.liquid
│   ├── page.contact.liquid
│   ├── page.liquid
│   ├── product.liquid
│   ├── search.liquid
│   └── customers
│         └── required templates if customer accounts are enabled
├── config.yml
│   └── if using the theme gem (see link under Additional Resources)
```

Additional resources
---------------------
- [Shopify Themes Documentation][1]: Learn more about Liquid and theme templates.
- [Theme Kit][7]: Next generation tool for syncing theme files. Currently in beta.
- [Liquid Tag Cheat Sheet][4]
- Need more help? Ask a question in Shopify's [Design Forums][6].

License
---------------------
Timber is released under the [MIT License](LICENSE).

[1]: http://docs.shopify.com/themes
[2]: https://github.com/Shopify/shopify_theme
[3]: http://apps.shopify.com/desktop-theme-editor
[4]: http://cheat.markdunkley.com
[5]: https://www.shopify.com/retailtour
[6]: http://ecommerce.shopify.com/c/ecommerce-design
[7]: https://github.com/Shopify/themekit
