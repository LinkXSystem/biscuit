const compose = target => {
  if (!(target instanceof Array)) return target;
  return Object.assign({}, ...target);
};

export default {
  compose
};
