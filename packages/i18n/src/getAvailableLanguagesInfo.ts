interface AvailableLanguages {
  value: string;
  label: string;
}
const languagesMap = {
  en: 'English',
  es: 'Spanish',
};

export default function getAvailableLanguagesInfo(locales) {
  const availableLanguagesInfo: Array<AvailableLanguages> = [];

  Object.keys(locales).forEach((key) => {
    availableLanguagesInfo.push({
      value: key,
      label: languagesMap[key] || key,
    });
  });

  return availableLanguagesInfo;
}
