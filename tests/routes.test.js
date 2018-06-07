const routes = require('../routes')

test("test suite works", () => {
  expect(true).toBe(true)
} )

test("getWinnerName returns a name", () => {
  expected = 'rebecca'
  actual = routes.getWinnerName()
  expect(actual).toBe(expected)
})

test("getWinner returns requested obj", () => {

  let profiles = [
    {name: 'cate',
    image: 'cate.jpg'},
    {name: 'anton',
    image: 'anton.jpg'}
  ]

  expected = {name: 'anton', image: 'anton.jpg'}
  actual = routes.getWinner(profiles, 'anton')
  expect(actual).toEqual(expected)
})

test.only("addScore adds to the score", () => {
  let expected = [
    {name: "anton", score: 3},
    {name: "brad", score: 5},
    {name: "cate", score: 2},
    {name: "rebecca", score: 5},
    {name: "ross", score: 1}
  ]
  routes.addScore('brad')
  expect(routes.score).toEqual(expected)
})
