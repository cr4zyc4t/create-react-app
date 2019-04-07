# babel-preset-react-app

This is a fork of facebook's babel-preset-react-app.
Modifications:
- Allow browserlist config instead of always target ie9 (WTF facebook???)
- Change @babel/preset-env options useBuiltIns from false to "entry", allow optimize import @babel/polyfill, could result better on old browser
- Add options loose: true to @babel/preset-env so app could run faster on old browser

## How to use
You must use this package along with @cr4zyc4t/react-scripts
