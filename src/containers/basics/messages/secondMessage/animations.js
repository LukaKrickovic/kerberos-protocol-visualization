const ANIMATIONS = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
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
      marginTop: "20%",
    },
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
      transform: "translate(0, -200%)",
    },
    delay: 1000,
  },
};

export default ANIMATIONS;
