const truncateText = (text, maxWords) => {
  const wordsArray = text.split(" ");
  if (wordsArray.length > maxWords) {
    return wordsArray.slice(0, maxWords).join(" ") + "...";
  } else {
    return text;
  }
};

export default truncateText;
