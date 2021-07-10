import $ from "jquery";

function carouselMove(dir, moveBy, ref) {
  const scrollLeft = $(ref.current).scrollLeft();

  let newScrollLeft;
  if (dir === "forward") newScrollLeft = scrollLeft + moveBy;
  else if (dir === "backward") newScrollLeft = scrollLeft - moveBy;

  $(ref.current).animate({ scrollLeft: newScrollLeft }, 1000, () => {
    $(ref.current).scrollLeft(newScrollLeft);
  });
}

export default carouselMove;
