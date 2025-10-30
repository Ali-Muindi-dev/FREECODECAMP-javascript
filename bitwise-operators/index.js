// 🌟 Understanding Bitwise Operators in JavaScript 🌟

// Let's start with two numbers:
let a = 5;   // In binary: 0101
let b = 3;   // In binary: 0011

// ───────────────────────────────────────────────
// 1️⃣ Bitwise AND (&)
// Compares each bit of a and b.
// If both bits are 1 → result is 1, otherwise 0.
//
//   0101  (which is 5)
// & 0011  (which is 3)
// --------
//   0001  (which is 1)
console.log("a & b =", a & b);  // Output: 1

// ───────────────────────────────────────────────
// 2️⃣ Bitwise OR (|)
// Compares each bit of a and b.
// If at least one bit is 1 → result is 1.
//
//   0101  (5)
// | 0011  (3)
// --------
//   0111  (7)
console.log("a | b =", a | b);  // Output: 7

// ───────────────────────────────────────────────
// 3️⃣ Bitwise XOR (^)
// XOR means "exclusive OR"
// If bits are different → result is 1, if same → 0.
//
//   0101  (5)
// ^ 0011  (3)
// --------
//   0110  (6)
console.log("a ^ b =", a ^ b);  // Output: 6

// ───────────────────────────────────────────────
// 4️⃣ Bitwise NOT (~)
// Flips all bits — 1s become 0s and 0s become 1s.
// JavaScript uses 32-bit signed integers for bitwise operations.
//
//   a = 5 → binary 00000000000000000000000000000101
//   ~a     →        11111111111111111111111111111010
// This equals -6 (because of two's complement representation)
console.log("~a =", ~a);  // Output: -6

// ───────────────────────────────────────────────
// 5️⃣ Left Shift (<<)
// Shifts bits to the left and adds 0s on the right.
// Each left shift multiplies the number by 2.
//
//   0101 (5) << 1 → 1010 (10)
console.log("a << 1 =", a << 1);  // Output: 10

// ───────────────────────────────────────────────
// 6️⃣ Right Shift (>>)
// Shifts bits to the right, removing bits that fall off.
// Each right shift divides the number by 2 (and rounds down).
//
//   0101 (5) >> 1 → 0010 (2)
console.log("a >> 1 =", a >> 1);  // Output: 2

// ───────────────────────────────────────────────
// 7️⃣ Unsigned Right Shift (>>>)
// Works like >>, but does not keep the sign bit.
// For positive numbers, result is the same as >>.
// For negative numbers, it fills left side with zeros.
//
//   0101 (5) >>> 1 → 0010 (2)
console.log("a >>> 1 =", a >>> 1);  // Output: 2
