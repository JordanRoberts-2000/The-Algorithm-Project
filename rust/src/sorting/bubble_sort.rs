pub fn bubble_sort(arr: &Vec<i32>) -> Vec<i32> {
    let mut cloned_arr = arr.clone();
    let len = cloned_arr.len();

    for i in 0..len - 1 {
        let mut swapped = false;
        for j in 0..len - i - 1 {
            if cloned_arr[j + 1] < cloned_arr[j] {
                cloned_arr.swap(j, j + 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
    }

    cloned_arr
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_bubble_sort() {
        let unsorted = vec![5, 2, 9, 1, 7, 6, 3, 8, 4, 0];
        let sorted = bubble_sort(&unsorted);
        assert_eq!(sorted, vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }

    #[test]
    fn test_already_sorted() {
        let sorted_input = vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let result = bubble_sort(&sorted_input);
        assert_eq!(result, sorted_input);
    }

    #[test]
    fn test_reverse_sorted() {
        let reverse_sorted = vec![9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        let sorted = bubble_sort(&reverse_sorted);
        assert_eq!(sorted, vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
}
