function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        defaultLanguage: "en",
        pageLanguage: "en",
        includedLanguages: "bn,en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true,
      },
      "google_translate_element"
    );
  }