export const convertStringToUrl = (str: string) => {
  const lowercaseStr = str.toLowerCase();
  return lowercaseStr.replaceAll(' ', '-');
}