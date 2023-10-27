export function setupLaserPointer(selector: string) {
  const cursorUrl =
    "data:image/svg+xml," +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' height='8' width='8' viewBox='0 0 2 2'><circle cx='1' cy='1' r='1' fill='#da0058'/></svg>"
    );
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
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
    cursor: url("${cursorUrl}"), auto !important;
}
`;
  document.head.appendChild(styleEl);

  const trajectorySvgList: SVGElement[] = [];
  async function createTrajectory(x, y) {
    let svg: SVGElement;
    if (trajectorySvgList.length >= 20) {
      svg = trajectorySvgList.shift()!;
      svg.classList.remove("laser-pointer-trajectory--active");
      svg.classList.add("laser-pointer-trajectory--inactive");
    } else {
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("height", "8");
      svg.setAttribute("width", "8");
      svg.setAttribute("viewBox", "0 0 2 2");
      svg.innerHTML = `<circle cx='1' cy='1' r='1' fill='#da0058'/>`;
      svg.addEventListener("animationend", () => {
        svg.classList.remove("laser-pointer-trajectory--active");
        svg.classList.add("laser-pointer-trajectory--inactive");
      });
    }
    trajectorySvgList.push(svg);
    svg.classList.add("laser-pointer-trajectory");
    svg.classList.remove("laser-pointer-trajectory--inactive");
    svg.classList.add("laser-pointer-trajectory--active");
    svg.style.top = `${y}px`;
    svg.style.left = `${x}px`;
    document.body.appendChild(svg);
  }
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (document.querySelector(selector)?.contains(e.target as Node)) {
      createTrajectory(x, y);
    }
  });
}
