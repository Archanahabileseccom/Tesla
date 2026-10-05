// src/animations/animations.js

/* =========================================================
   COMMON ANIMATION VARIANTS
   ========================================================= */

/* Fade In */

export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* Fade In Up */

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* Fade In Down */

export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* Fade In Left */

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* Fade In Right */

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* Scale In */

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* Scale Up */

export const scaleUp = {
  hidden: {
    scale: 1.08,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   HERO ANIMATIONS
   ========================================================= */

export const heroContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};


export const heroText = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export const heroImage = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   CONTAINER / STAGGER ANIMATIONS
   ========================================================= */

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};


export const fastStaggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};


export const slowStaggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};


/* =========================================================
   CARD ANIMATIONS
   ========================================================= */

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export const cardHover = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
};


/* =========================================================
   IMAGE ANIMATIONS
   ========================================================= */

export const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export const imageZoom = {
  initial: {
    scale: 1,
  },

  hover: {
    scale: 1.05,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   TEXT ANIMATIONS
   ========================================================= */

export const textReveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export const titleReveal = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   SLIDE ANIMATIONS
   ========================================================= */

export const slideLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export const slideRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   PAGE TRANSITION
   ========================================================= */

export const pageTransition = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};


/* =========================================================
   SECTION TRANSITION
   ========================================================= */

export const sectionTransition = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   BUTTON ANIMATION
   ========================================================= */

export const buttonHover = {
  scale: 1.03,

  transition: {
    duration: 0.25,
    ease: "easeOut",
  },
};


/* =========================================================
   LINK / ARROW ANIMATION
   ========================================================= */

export const arrowHover = {
  initial: {
    x: 0,
  },

  hover: {
    x: 6,

    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};


/* =========================================================
   NAVBAR ANIMATIONS
   ========================================================= */

export const navbarAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export const dropdownAnimation = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,

    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};


/* =========================================================
   MOBILE MENU
   ========================================================= */

export const mobileMenuAnimation = {
  hidden: {
    opacity: 0,
    x: "100%",
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    x: "100%",

    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   MODAL / OVERLAY
   ========================================================= */

export const overlayAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.25,
    },
  },
};


/* =========================================================
   UTILITY TRANSITIONS
   ========================================================= */

export const smoothTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};


export const fastTransition = {
  duration: 0.3,
  ease: "easeOut",
};


export const slowTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};


/* =========================================================
   DEFAULT EXPORT
   ========================================================= */

const animations = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleUp,

  heroContainer,
  heroText,
  heroImage,

  staggerContainer,
  fastStaggerContainer,
  slowStaggerContainer,

  cardAnimation,
  cardHover,

  imageReveal,
  imageZoom,

  textReveal,
  titleReveal,

  slideLeft,
  slideRight,

  pageTransition,
  sectionTransition,

  buttonHover,
  arrowHover,

  navbarAnimation,
  dropdownAnimation,

  mobileMenuAnimation,
  overlayAnimation,

  smoothTransition,
  fastTransition,
  slowTransition,
};

export default animations;