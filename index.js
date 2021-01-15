var recipes = new Object({ prop: '1', prop2: '2' })

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { 'prop': ['new value']})
}
