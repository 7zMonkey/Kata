import BubbleSort from "../src/000001-sort.js";
import { describe, expect, it } from 'vitest'

describe("BubbleSort", () => {
  it("排序", () => {
    const arr = [3, 1, 5, 2, 4];
    const arrSort = BubbleSort(arr);
    expect(arrSort).toEqual([1, 2, 3, 4, 5])
  });
  it("原始数组未变更", () => {
    const arr = [3, 1, 5, 2, 4];
    const arrSort = BubbleSort(arr);
    expect(arr).toEqual([3, 1, 5, 2, 4]);
  });
})
