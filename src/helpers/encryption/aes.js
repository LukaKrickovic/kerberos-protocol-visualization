import aes from "crypto-js/aes";

// import aes from "js-crypto-aes";

// const encrypt = (message) => {
//   const key = process.env.REACT_APP_MOCK_SECRET_KEY;
//   const encodedMessage = new TextEncoder().encode(message);
//   const iv = [];
//   const additionalData = [];
//   var returnValue = "";
//   aes
//     .encrypt(encodedMessage, key, {
//       name: "AES-CBC",
//       iv,
//       additionalData,
//       tagLength: 16,
//     })
//     .then((encrypted) => {
//       returnValue = encrypted;
//     })
//     .catch((e) => {
//       console.log(e);
//     });

//   return returnValue;
// };

const encrypt = (message) => {
  var message = aes.encrypt(message, process.env.REACT_APP_MOCK_SECRET_KEY);
  return message.toString();
};

export default encrypt;
