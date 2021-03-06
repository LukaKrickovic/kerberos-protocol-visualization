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
  tgsIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "-50%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "60%",
    },
  },
  userAuthenticatorIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "-50%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "60%",
      marginTop: "25%",
    },
    delay: messageDelayPeriod,
  },
  serviceTicketIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "-50%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "60%",
    },
  },
  serviceAuthenticatorIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "100%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "20%",
      marginTop: "-40%",
    },
    delay: 3 * messageDelayPeriod,
  },
  cacheIntro: {
    from: { opacity: 0 },
    to: { opacity: 1, marginLeft: "80%", marginTop: "7.5%" },
    config: { duration: fadeInPeriod / 2 },
    delay: 2 * messageDelayPeriod,
  },
};

export default ANIMATIONS;
