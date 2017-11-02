import { swapItemsInArray } from './index'

it('should swap two items in array', () => {
  const arr = [2, 3, 4, 5, 6, 7]
  expect(swapItemsInArray(arr, 1, 4)).toEqual([2, 6, 4, 5, 3, 7])
})
