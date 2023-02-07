<div align="center">

  <h1><code>wasm-pack-template</code></h1>

<strong>A template for kick starting a Rust and WebAssembly project based on the <a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a> and <a href="https://github.com/rustwasm/create-wasm-app">create-wasm-app</a> templates.</strong>

</div>

## About

[**📚 Read this template tutorial! 📚**][template-docs]

This template is designed for compiling Rust libraries into WebAssembly and
publishing the resulting package to NPM.

Be sure to check out [other `wasm-pack` tutorials online][tutorials] for other
templates and usages of `wasm-pack`.

[tutorials]: https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html
[template-docs]: https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html

## 🚴 Getting Started

To get started, clone this repository

```bash
git clone https://github.com/terryluan12/rust-wasm-template.git
```

Open the repo directory

```bash
cd rust-wasm-template
```

Now you can build the rust(wasm) portion of the project

```bash
wasm-pack build
```

Once the rust wasm code is build, move into the web portion of the app

```bash
cd www
```

Install all needed node modules

```bash
npm install
```

You can now start the app through

```bash
npm start
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

## License

Licensed under either of

- Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
