const generateRandomId = (
  (i) => () =>
    i++
)(0)

const dynamicSort = (property, sortType = 'ASC') => {
  let sortOrder = sortType === 'ASC' ? 1 : -1

  if (sortOrder === -1) {
    property = property.substr(1)
  }
  return function (a, b) {
    let result = a < b ? -1 : a > b ? 1 : 0
    if (property) {
      result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    }

    return result * sortOrder
  }
}

const simpleSort = (sortType = 'ASC') => {
  let sortOrder = sortType === 'ASC' ? 1 : -1

  return function (a, b) {
    let result = a < b ? -1 : a > b ? 1 : 0

    return result * sortOrder
  }
}

const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

const toCamelCase = (text) => {
  return text.replace(/-\w/g, clearAndUpper);
}

const toPascalCase = (text) => {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

const clearAndUpper = (text) => {
  return text.replace(/-/, "").toUpperCase();
}

export { generateRandomId, dynamicSort, simpleSort, groupBy, toCamelCase, toPascalCase, clearAndUpper }
