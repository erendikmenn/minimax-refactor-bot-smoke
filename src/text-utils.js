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

export function formatArticleSummary(article) {
  const title = article && article.title ? String(article.title).trim() : "Untitled";
  const author = article && article.author ? String(article.author).trim() : "Unknown";
  const date = article && article.date ? String(article.date).trim() : "n/a";

  let line1 = "";
  line1 += "Title: ";
  line1 += title;

  let line2 = "";
  line2 += "Author: ";
  line2 += author;

  let line3 = "";
  line3 += "Date: ";
  line3 += date;

  const result = [];
  result.push(line1);
  result.push(line2);
  result.push(line3);

  if (article && article.tags && Array.isArray(article.tags)) {
    for (let i = 0; i < article.tags.length; i += 1) {
      result.push("Tag: " + String(article.tags[i]));
    }
  }

  return result.join("\n");
}
