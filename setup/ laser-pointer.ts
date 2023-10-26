export function setupLaserPointer(selector: string) {
  const cursorUrl =
    "data:image/svg+xml," +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' height='8' width='8' viewBox='0 0 2 2'><circle cx='1' cy='1' r='1' fill='#da0058'/></svg>"
    );
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
:root {
    --laser-pointer-url: url("${cursorUrl}");
}
.laser-pointer-trajectory {
  position: fixed;
  pointer-events: none;
}
.laser-pointer-trajectory--inactive {
  display: none;
}
.laser-pointer-trajectory--active {
  animation: 300ms linear laser-pointer-trajectory;
}
@keyframes laser-pointer-trajectory {
  from {
    transform: scale(0.9);
    opacity: 0.8;
  }
  to {
    transform: scale(0);
    opacity: 0.5;
  }
}
${selector} {
    cursor: var(--laser-pointer-url), auto;
}
`;
  document.head.appendChild(styleEl);

  const trajectoryImages: HTMLImageElement[] = [];
  async function createTrajectory(x, y) {
    let img: HTMLImageElement;
    if (trajectoryImages.length >= 20) {
      img = trajectoryImages.shift()!;
      img.classList.remove("laser-pointer-trajectory--active");
      img.classList.add("laser-pointer-trajectory--inactive");
    } else {
      img = document.createElement("img");
      img.addEventListener("animationend", () => {
        img.classList.remove("laser-pointer-trajectory--active");
        img.classList.add("laser-pointer-trajectory--inactive");
      });
    }
    trajectoryImages.push(img);
    img.classList.add("laser-pointer-trajectory");
    img.classList.remove("laser-pointer-trajectory--inactive");
    img.classList.add("laser-pointer-trajectory--active");
    img.src = cursorUrl;
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
    document.body.appendChild(img);
  }
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (document.querySelector(selector)?.contains(e.target as Node)) {
      createTrajectory(x, y);
    }
  });
}
