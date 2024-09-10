function isPalindrome(string) {
    
    // lowering the whole string
    string = string.toLowerCase();

    // two pointer system
    let left = 0;
    let right = string.length - 1;

    // loop to iterate through whole string
    while (left <= right){
        
        // DRY - getting the left and right characters using respective pointers
        let leftCharacter = string[left];
        let rightCharacter = string[right];

        // block of code to check if character is alphanumeric
        if (!/^[a-z0-9]+$/.test(leftCharacter)){
            left++;
            continue;
        }
        // block of code to check if character is alphanumeric
        if (!/^[a-z0-9]+$/.test(rightCharacter)){
            right--;
            continue;
        }

        // checking to see if characters are the same
        if (leftCharacter != rightCharacter){
            return false;
        }

        // updating pointers
        left++;
        right--;
        
    }

    // returning true by default
    return true;
};