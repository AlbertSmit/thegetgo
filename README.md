<div align="center">
  <h1><i>the get go :horse:</i></h1>
  <p>🦢 Lightweight. &nbsp; <b>/</b> &nbsp; 💽 Good DX. &nbsp; <b>/</b> &nbsp; 🏇🏻 Fast.</p>
  <p>Minimalistic starter with Alpine.js, Vite, Husky, ESLint, and PostCSS.</p>
</div>

# Why?
Setting up pagest fast, with tech that excite me. 
Also, none of the boilerplate setup mumbo-jumbo; we wanna get to work!
Nevertheless; tech with nice syntax, and not just grabbin' a new copy of `create-react-app` straight away for every _simple_ project. **There's no need.**

# Which?
- [Alpine.js](https://github.com/alpinejs/alpine)\
We want to work with data, make things interactive, and bind attributes. We can also just use React, right? 
Well, yes. We can. But we don't need to kill a fly with a machine gun, now do we. 
Let's not get overboard with the tools!
- [Spruce](https://github.com/ryangjchandler/spruce)\
I like trees, as you might have noticed. Also, we might want to save some data in our starter. 
This is what we call a state. Spruce and Alpine; a great pair of trees. 
- [Vite](https://github.com/vitejs/vite) (which uses [Rollup.js](https://github.com/webpack/webpack) to bundle)\
Developments need to be done on a server. And we want it to be _fast_. This does it. 
Also! We need to bundle all the stuff we use. This lets Rollup.js bundle everything when we put it on production (which we can configure to do whatever we want! Woohoo!).
  - **Vite** has in implementation for **PostCSS**; this lets us do the following:
    - Normalize the user-agent CSS.
    - Use future CSS (like `--var:`) right now!
    - Minify our CSS on bundling.
    - Have nested CSS (like SASS, without having SASS).
- [Husky](https://github.com/typicode/husky) + [ESLint](https://github.com/eslint/eslint) + [Lint-staged](https://github.com/okonet/lint-staged)\
Linting is fun and all, but we want to automate things. 
Run the linter pre-commit.

# When?
_Right now_.

---

With love,\
_Albert_.
