import aes from "crypto-js/aes";

const encrypt = (message) => {
  var encrypted = aes.encrypt(message, process.env.REACT_APP_MOCK_SECRET_KEY);
  return encrypted.toString();
};

export default encrypt;
