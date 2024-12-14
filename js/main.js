const txt = new SplitType(".block-text");
const container = document.querySelector(".block-video-bg");
let previousContainerWidth = null;

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      const contentBoxSize = entry.contentBoxSize[0];
      txt.split();
    }
  }

  console.log("split");
});

resizeObserver.observe(container);
