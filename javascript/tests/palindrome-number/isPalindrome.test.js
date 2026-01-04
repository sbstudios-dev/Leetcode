const isPalindrome = require('../../src/palindrome-number/isPalindrome');

test('isPalindrome returns correct true if palindrome', () => {
    const result = isPalindrome(121);
    expect(result).toBe(true);
});

test('isPalindrome returns correct false if not palindrome', () => {
    const result = isPalindrome(-121);
    expect(result).toBe(false);
});

test('isPalindrome returns correct false if not palindrome', () => {
    const result = isPalindrome(10);
    expect(result).toBe(false);
});
