/** @module insert-string-before */

import {isEmpty} from "has-content"

/**
 * @function
 * @param {string} haystack
 * @param {string} needle
 * @param {string} insertedString
 * @returns {string} New string
 * @example
 * import insertStringBefore from "insert-string-before"
 * const result = insertStringBefore("I am the Hedgehog!", "the", "Sanic ")
 * result === "I am Sanic the Hedgehog!"
 */
export default (haystack, needle, insertedString) => {
  if (isEmpty(insertedString)) {
    return haystack
  }
  const needleString = String(needle)
  const index = haystack.indexOf(needleString)
  if (index === -1) {
    return haystack
  }
  return haystack.slice(0, index) + insertedString + haystack.slice(index)
}