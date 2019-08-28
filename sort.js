// 快速排序，A 是数组，n 表示数组的大小
function quick_sort(A, n) {
  quick_sort_c(A, 0, n - 1)
}

function quick_sort_c(a, p, r) {
  if (p >= r) {
    return
  }
  let q = partition(a, p, r)
  console.log(q)
  quick_sort_c(a, p, q - 1)
  quick_sort_c(a, q + 1, r)
}

function swap(a, x, y) {
  let temp = a[x]
  a[x] = a[y]
  a[y] = temp
}

function partition(a, p, r) {
  let pivor = a[r]
  let i = p
  for (let j = p; j < r + 1; j++) {
    if (a[j] < pivor) {
      swap(a, i, j)
      i++
    }
  }

  swap(a, i, r)
  return i
}

// 冒泡排序，a 表示数组
function bubbleSort(a) {
  let n = a.length
  for (let i = 0; i < n; i++) {
    let flag = false
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        // 交换
        let tmp = a[j]
        a[j] = a[j + 1]
        a[j + 1] = tmp
        flag = true // 表示有数据交换
      }
    }
    if (!flag) break // 没有数据交换，提前退出
  }
}

// 插入排序，a 表示数组
function insertionSort(a) {
  let n = a.length
  for (let i = 1; i < n; ++i) {
    let value = a[i]
    let j = i - 1
    // 查找插入的位置

    for (; j >= 0; --j) {
      if (a[j] > value) {
        a[j + 1] = a[j] // 数据移动
      } else {
        break
      }
    }
    a[j + 1] = value // 插入数据
  }
}

// 归并排序
function mergeSort(arr) {
  const length = arr.length
  if (length === 1) {
    //递归算法的停止条件，即为判断数组长度是否为1
    return arr
  }
  const mid = Math.floor(length / 2)

  const left = arr.slice(0, mid)
  const right = arr.slice(mid, length)

  return merge(mergeSort(left), mergeSort(right)) //要将原始数组分割直至只有一个元素时，才开始归并
}

function merge(left, right) {
  const result = []
  let il = 0
  let ir = 0

  //left, right本身肯定都是从小到大排好序的
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il])
      il++
    } else {
      result.push(right[ir])
      ir++
    }
  }

  //不可能同时存在left和right都有剩余项的情况, 要么left要么right有剩余项, 把剩余项加进来即可
  while (il < left.length) {
    result.push(left[il])
    il++
  }
  while (ir < right.length) {
    result.push(right[ir])
    ir++
  }

  return result
}
