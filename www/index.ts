import { Universe } from "wasm-game-of-life";

export default function main(rust_wasm: any) {
  const pre = document.getElementById("game-of-life-canvas");
  const universe = new Universe();

  const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
  };
  requestAnimationFrame(renderLoop);
}
