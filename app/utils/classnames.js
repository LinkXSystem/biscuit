/**
 * @description use to composing the class of array
 * @author zhi
 * @param {*} target the class of array
 */
const classnames = target => {
  if (!(target instanceof Array)) return target.toString();

  return target.join(' ');
};

export default classnames;
