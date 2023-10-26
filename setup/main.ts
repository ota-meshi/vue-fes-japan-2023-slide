import { defineAppSetup } from "@slidev/types";
import { computed } from "vue";
import { setupLaserPointer } from "./ laser-pointer";

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
  setupLaserPointer("#slideshow");
});
