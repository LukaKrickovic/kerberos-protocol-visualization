const messageDelayPeriod = 250;
const fadeInPeriod = 1000;

const ANIMATIONS = {
  fadeIn: {
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
    config: { duration: fadeInPeriod },
  },
  firstMessageIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "-50%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "60%",
    },
  },

  firstResponseIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "100%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "20%",
      // marginTop: "-25%",
    },
    delay: messageDelayPeriod,
  },

  tgtIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "100%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "20%",
      marginTop: "22.5%",
    },
    delay: 2 * messageDelayPeriod,
  },
};

export default ANIMATIONS;
