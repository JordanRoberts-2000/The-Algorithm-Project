pub fn bubble_sort<const N: usize>(arr: &[i32; N]) -> [i32; N] {
    let mut cloned_arr = arr.clone();
    for i in 0..cloned_arr.len() - 1 {
        let mut swapped = false;
        for j in 0..cloned_arr.len() - i - 1 {
            if cloned_arr[j + 1] < cloned_arr[j] {
                cloned_arr.swap(j, j + 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        };
    }

    return cloned_arr;
}
