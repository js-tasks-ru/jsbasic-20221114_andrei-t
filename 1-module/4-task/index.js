function checkSpam(str) {
  // ваш код...
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('1xBet'.toLowerCase()) || lowerStr.includes('XXX'.toLowerCase());
}
