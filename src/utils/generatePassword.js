function generatePassword(size = 8, hasSpecial = false) {
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const specialCharacters = '!@#$%^&*()_+';
  if (hasSpecial) {
    characters = characters + specialCharacters;
  }
  const charsetLength = characters.length;
  let result = '';
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    result += characters[randomIndex];
  }
  return result;
}

module.exports = generatePassword;
