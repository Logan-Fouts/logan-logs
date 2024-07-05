# Python Notes

### Fancy Operators

#### Walrus Operator (`:=`)

The walrus operator, allows you to assign values to variables as part of an expression.

- **Syntax**: `variable := expression`
- **Usage**:
  - **Inline assignments**: Useful for reducing redundancy and improving readability.
  - **Loops and conditionals**: Helps in using the result of an expression multiple times without recalculating it.

```python
# Example in a loop
data = [1, 2, 3, 4, 5]
while (n := len(data)) > 0:
    print(f"List length: {n}")
    data.pop()

# Example in a conditional
if (result := some_function()) > threshold:
    print(f"Result is above threshold: {result}")
```

#### Ternary Operator

```python
# result = "this one" if condition else "that one"
answer = True
num = 1 if answer else 0
print(num)
```

- Helpful link: [Python Ternary Operators](https://book.pythontips.com/en/latest/ternary_operators.html)

#### Bitwise Division in Python

Bitwise division uses bitwise operations to perform division, particularly using the right shift operator (`>>`).

- **Right Shift Operator (`>>`)**:
  - **Purpose**: Shifts the bits of the number to the right by a specified number of positions.
  - **Effect**: Each right shift by one position is equivalent to dividing the number by 2.

```python
# Example of bitwise division
number = 32
shift_amount = 3

# Dividing by 2^shift_amount (2^3 = 8)
result = number >> shift_amount  # Equivalent to 32 // 8

print(result)  # Output: 4
```

- **Using Bitwise Operations for Division**:
  - **Efficiency**: Bitwise operations are typically faster than regular arithmetic operations.
  - **Constraints**: Suitable for divisions by powers of 2.

```python
def bitwise_divide(dividend, divisor):
    if divisor == 0:
        raise ValueError("Division by zero is undefined")
    if divisor & (divisor - 1) != 0:
        raise ValueError("Bitwise division works with powers of 2 only")

    shift_amount = 0
    while divisor > 1:
        divisor >>= 1
        shift_amount += 1

    return dividend >> shift_amount

# Example usage
dividend = 64
divisor = 8

result = bitwise_divide(dividend, divisor)
print(result)  # Output: 8
```

### Data structures

#### Sets

##### Set is Faster Than List for Searching

- [Example](https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75)

```python
# Slow
s = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
# Fast
s = set('aeiouAEIOU')
```

##### Set Operations

- You can subtract sets from each other to find the difference.

```python
nums1, nums2 = [1,2,3], [2,4,6]
set1, set2 = set(nums1), set(nums2)
print([set1 - set2, set2 - set1])
```

#### Queues

- `pop()` is O(n) while `popleft()` is O(1)

