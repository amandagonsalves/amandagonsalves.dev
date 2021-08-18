module.exports = {
  helpers: {
    lowerAndDash: string => {
      const lower = string.toLowerCase();
      const lowerAndDash = lower.replace(/([,?;:\\./ ])/g, '-');
      const replaceDoubleDash = lowerAndDash.replace(/([-]{2})/g, '-');

      return replaceDoubleDash;
    },
    lowerCase: (string) => {
      return string.toLowerCase();
    }
  }
}