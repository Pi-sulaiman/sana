export const slideUp = {
  initial: {
    y: "0vh",
  },
  animate: {
    y: "-100vh",
    transition: { duration: 0.5 },
  },
};

export const up = {
  initial: {
    y: "20vh",
  },
  animate: {
    y: "-4vh",
    transition: { duration: 0.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const navSlide = {
  open: {
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    y: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const button = {
  up: {
    y: "-50px",
  },
};

export const button2 = {
  up: {
    y: "-100px",
    transition: {duration: 0.2},
  },
};

export const scaleAnimation = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const textUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] },
  },
};

export const scale = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {duration: 0.5},
  },
};