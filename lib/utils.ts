/**
 * Combines multiple class names into a single string, filtering out falsy values
 * @param classes - Array of class names or conditional class names
 * @returns Combined class names as a single string
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes
    .filter(Boolean)
    .join(' ')
    .trim()
} 