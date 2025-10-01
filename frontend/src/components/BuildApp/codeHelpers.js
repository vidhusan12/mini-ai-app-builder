export function cleanCode(raw) {
  if (!raw) return "";
  return raw.replace(/```jsx([\s\S]*?)```/g, "$1")
    .replace(/```([\s\S]*?)```/g, "$1")
    .trim();
}

