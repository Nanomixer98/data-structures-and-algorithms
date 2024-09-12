# Colorful Numbers

## Objective

Given a number, determine whether it is a colorful number.

## Definition

A **Colorful Number** is defined as a number where the product of every contiguous sub-sequence is different.

## Examples

### Example 1

**Given Number:** 3245  
**Output:** Colorful

The number 3245 can be broken into parts as follows:

- Single digits: 3, 2, 4, 5
- Two-digit sequences: 32, 24, 45
- Three-digit sequences: 324, 245

For each sub-sequence, calculate the product of its digits:

- 3
- 2
- 4
- 5
- \(3 \* 2 = 6\)
- \(2 \* 4 = 8\)
- \(4 \* 5 = 20\)
- \(3 _ 2 _ 4 = 24\)
- \(2 _ 4 _ 5 = 40\)

All products are different, so 3245 is a colorful number.

### Example 2

**Given Number:** 326  
**Output:** Not Colorful

The number 326 can be broken into parts as follows:

- Single digits: 3, 2, 6
- Two-digit sequences: 32, 26

For each sub-sequence, calculate the product of its digits:

- 3
- 2
- 6
- \(3 \* 2 = 6\)
- \(2 \* 6 = 12\)

The product 6 is repeated, so 326 is not a colorful number.
