var arr = [4, 9, 5, 11, 12, 3];
var n = arr.length;
var pivot = arr[n / 2];
var i = 0;
var j = n - 1;
function quickSort(arr, i, j) {
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        return j;
    }
}
var index = quickSort(arr, i, j);
console.log(index);






const A = [5, 3, 7, 6, 9, 2];
function swap(A, leftIndex, rightIndex) {
    const temp = A[leftIndex]; A[leftIndex] = A[rightIndex]; A[rightIndex] = temp;
}
function partition(A, left, right) {
    var pivot = A[left],
        i = left, j = right;
    while (i <= j) {
        while (A[i] < pivot) {
            i++;
        } while (A[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(A, i, j); i++; j--;
        }
    }
    return j;
}
function quickSort(A, left, right) {
    var index;
    if (A.length > 1) {
        index = partition(A, left, right);
        if (left < index) {
            quickSort(A, left, index);
        } if (index + 1 < right) {
            quickSort(A, index + 1, right);
        }
    }
    return A;
}
var sortedArray = quickSort(A, 0, A.length - 1); 
console.log(sortedArray);