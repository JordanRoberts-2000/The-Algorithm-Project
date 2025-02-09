pub fn bubble_sort(arr: &mut Vec<i32>) {
    for i in 0..arr.len() - 1 {
        let mut swapped = false;
        for j in 0..arr.len() - i - 1 {
            if arr[j + 1] < arr[j] {
                arr.swap(j, j + 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_bubble_sort() {
        let mut unsorted = vec![5, 2, 9, 1, 7, 6, 3, 8, 4, 0];
        bubble_sort(&mut unsorted);
        assert_eq!(unsorted, vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }

    #[test]
    fn test_already_sorted() {
        let mut sorted_input = vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        bubble_sort(&mut sorted_input);
        assert_eq!(sorted_input, vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }

    #[test]
    fn test_reverse_sorted() {
        let mut reverse_sorted = vec![9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        bubble_sort(&mut reverse_sorted);
        assert_eq!(reverse_sorted, vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
}
