const messageDelayPeriod = 250;
const fadeInPeriod = 1000;

const ANIMATIONS = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: fadeInPeriod },
  },
  cacheIntro: {
    from: { opacity: 0 },
    to: { opacity: 1, marginLeft: "80%", marginTop: "7.5%" },
    config: { duration: fadeInPeriod / 2 },
    delay: 3 * messageDelayPeriod,
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
  messageIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "-50%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "60%",
      marginTop: "22.5%",
    },
    delay: messageDelayPeriod,
  },
  secondMessageIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "-50%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "60%",
      marginTop: "15%",
    },
    delay: 2 * messageDelayPeriod,
  },
  titleIntro: {
    from: { color: "steelblue", text: "Kerberos protocol visualization" },
    to: { color: "steelblue", text: "Second step" },
  },
  serviceTicketIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "100%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "20%",
      position: "absolute",
      marginTop: "-50%",
      // top: "67%",
    },
    delay: 4 * messageDelayPeriod,
  },
  secondResponseIntro: {
    from: { opacity: 0, height: "0", width: "0", marginLeft: "100%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "20%",
      marginTop: "-25%",
    },
    delay: 5 * messageDelayPeriod,
  },
};

export default ANIMATIONS;
