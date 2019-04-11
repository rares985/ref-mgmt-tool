module.exports = {
  getInitials: (str) => {
    const matches = str.match(/\b\w/g) || [];
    return ((matches.shift() || '') + (matches.pop() || '')).toUpperCase();
  },
  isEmpty: (str) => {
    return !str || str.length === 0;
  },
};
