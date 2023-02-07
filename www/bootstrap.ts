import main from "./index";

// Remove line below when pkg directory is created
// @ts-ignore
import("../pkg")
  .then((rust_wasm) => {
    main(rust_wasm);
  })
  .catch(console.error);
