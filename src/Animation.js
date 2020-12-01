export const scrollReveal = {
  hidden: {opacity: 0, scale: 1.1},
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration:1.5,
      ease: "easeOut",
    }
  }
}

export const expandOnScroll = {
  hidden: {width: '0%'},
  show: {
    width: '100%',
    transition: {
      duration: 1.3,
    }
  }
}