export function normalizeTitle(input) {
  if (typeof input !== "string") {
    return "";
  }

  const trimmed = input.trim();
  if (!trimmed) {
    return "";
  }

  const words = trimmed.split(/\s+/);
  const normalized = [];
  for (const word of words) {
    normalized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }

  return normalized.join(" ");
}

export function buildAuthorLines(authors) {
  if (!Array.isArray(authors)) {
    return [];
  }

  const lines = [];
  for (let i = 0; i < authors.length; i += 1) {
    const author = authors[i];
    lines.push(`Author ${i + 1}: ${String(author ?? "Unknown")}`);
  }

  return lines;
}
