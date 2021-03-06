function quickSort (arr) {
    const _quickSort = (array, start, end) => {
      if (start >= end) return array;

      // 在 partition 裡面調整數列，並且回傳 pivot 的 index
      const middle = partition(array, start, end);
      _quickSort(array, start, middle - 1);
      _quickSort(array, middle + 1, end);
      return array;
    };
    return _quickSort(arr, 0, arr.length - 1);
  }

  const partition = (array, start, end) => {
    let splitIndex = start + 1;
    for (let i = start + 1; i <= end; i++) {
      if (array[i] < array[start]) {
        swap(array, i, splitIndex);
        splitIndex++;
      }
    }

    // 記得把 pivot 跟最後一個比它小的元素互換
    swap(array, start, splitIndex - 1);
    return splitIndex - 1;
  }

  const swap = (array, i , j) => {
    [array[i], array[j]] = [array[j], array[i]];
  }


