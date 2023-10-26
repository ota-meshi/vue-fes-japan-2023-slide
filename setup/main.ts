import { defineAppSetup } from "@slidev/types";
import { computed } from "vue";
// @ts-expect-error
import cursorUrl from "/cursor.png?url";

export default defineAppSetup(({ app, router }) => {
  const route = computed(() => router.currentRoute.value);
  const isPrintMode = computed(() => route.value.query.print !== undefined);
  const baseMotionDirective = app.directive("motion")!;
  const newMotionDirective = {};
  for (const [k, fn] of Object.entries(baseMotionDirective)) {
    newMotionDirective[k] = (...args) => {
      if (isPrintMode.value) {
        return;
      }
      fn(...args);
    };
  }
  app.directive("motion-x", newMotionDirective);
  if (isPrintMode.value) {
    return;
  }

  const trajectoryImages: HTMLImageElement[] = [];
  async function createTrajectory(x, y) {
    let img: HTMLImageElement;
    if (trajectoryImages.length >= 20) {
      img = trajectoryImages.shift()!;
      img.classList.add("mouse-trajectory--close");
      await Promise.resolve();
      img.classList.remove("mouse-trajectory--close");
    } else {
      img = document.createElement("img");
      img.addEventListener("animationend", () => {
        img.classList.add("mouse-trajectory--close");
      });
    }
    trajectoryImages.push(img);
    img.classList.add("mouse-trajectory");
    img.src = cursorUrl;
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
    document.body.appendChild(img);
  }
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (document.querySelector("#slideshow")?.contains(e.target as Node)) {
      createTrajectory(x, y);
    }
  });
});
