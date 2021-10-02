import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const result = [];
  for (let i = 0; i < names.length; i++) {
    if (!result.includes(names[i])) {
      result.push(names[i]);
    } else {
      let app = 0;
      for (let j = 0; j < i; j++) {
        if (names[i] === names[j]) {
          app++;
        }
      }
      if (app === 0) {
        let inst = 0;
        for (let j = 0; j < result.length; j++) {
          if (names[i] === result[j]) {
            inst++;
          }
        }
        result.push(`${names[i]}(${inst})`);
      } else {
        result.push(`${names[i]}(${app})`);
      }
    }
  }
  return result;
}
