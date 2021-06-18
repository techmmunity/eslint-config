/**
 * This should produce a warn, because:
 * - It doesn't uses arrow function
 * - Unused var
 */
function foo() {}

// This should NOT produce a warn
const bar = () => {};
bar();
