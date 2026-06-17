export const googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      autoDisplay: false,
    },
    "google_translate_element"
  );
};
