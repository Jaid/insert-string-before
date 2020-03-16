# insert-string-before


<a href="https://raw.githubusercontent.com/jaid/insert-string-before/master/license.txt"><img src="https://img.shields.io/github/license/jaid/insert-string-before?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor insert-string-before"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/insert-string-before/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Finsert-string-before%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/insert-string-before/commits"><img src="https://img.shields.io/github/commits-since/jaid/insert-string-before/v1.0.0?style=flat-square&logo=github" alt="Commits since v1.0.0"/></a> <a href="https://github.com/jaid/insert-string-before/commits"><img src="https://img.shields.io/github/last-commit/jaid/insert-string-before?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/insert-string-before/issues"><img src="https://img.shields.io/github/issues/jaid/insert-string-before?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/insert-string-before"><img src="https://img.shields.io/npm/v/insert-string-before?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/insert-string-before/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/insert-string-before?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/insert-string-before"><img src="https://img.shields.io/npm/dm/insert-string-before?style=flat-square&logo=npm" alt="Downloads"/></a>

**Inserts a string before a needle's start in a haystack.**





## Installation

<a href="https://npmjs.com/package/insert-string-before"><img src="https://img.shields.io/badge/npm-insert--string--before-C23039?style=flat-square&logo=npm" alt="insert-string-before on npm"/></a>

```bash
npm install --save insert-string-before@^1.0.0
```

<a href="https://yarnpkg.com/package/insert-string-before"><img src="https://img.shields.io/badge/Yarn-insert--string--before-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="insert-string-before on Yarn"/></a>

```bash
yarn add insert-string-before@^1.0.0
```

<a href="https://github.com/jaid/insert-string-before/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/insert--string--before-24282e?style=flat-square&logo=github" alt="@jaid/insert-string-before on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/insert-string-before@^1.0.0
```



## Example


```javascript
import insertStringBefore from "insert-string-before"

const result = insertStringBefore("I am the Hedgehog!", "the", "Sanic ")
```

Variable `result` will be:

```javascript
"I am Sanic the Hedgehog!"
```












## Development



Setting up:
```bash
git clone git@github.com:jaid/insert-string-before.git
cd insert-string-before
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/insert-string-before/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (github.com/jaid)
