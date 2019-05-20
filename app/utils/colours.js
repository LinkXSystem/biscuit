/* eslint-disable func-names */
const getRandomColor = (function() {
  // In "DEBUG" mode this is used to output a random background color for each
  // box. The function gives the same "random" set for each seed, allowing re-
  // renders of the same content to give the same random display.
  const random = (function(seed) {
    let mW = seed;
    let mZ = 987654321;
    const mask = 0xffffffff;
    return function() {
      mZ = (36969 * (mZ & 65535) + (mZ >> 16)) & mask;
      mW = (18000 * (mW & 65535) + (mW >> 16)) & mask;
      let result = ((mZ << 16) + mW) & mask;
      result /= 4294967296;
      return result + 1;
    };
  })(601);

  return function() {
    const r = Math.max(parseInt(random() * 100, 10) % 256, 1);
    const g = Math.max(parseInt(random() * 100, 10) % 256, 1);
    const b = Math.max(parseInt(random() * 100, 10) % 256, 1);
    return `rgb(${r},${g},${b})`;
  };
})();
/* eslint-enable func-names */

export default {
  getRandomColor
};
