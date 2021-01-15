var recipes = new Object({ prop: 'new value', prop2: '2' })

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {prop: '1', prop2: '2', [prop: 'new value']})
}
