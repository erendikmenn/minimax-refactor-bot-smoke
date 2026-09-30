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
  const fields = {
    title: article?.title ? String(article.title).trim() : "Untitled",
    author: article?.author ? String(article.author).trim() : "Unknown",
    date: article?.date ? String(article.date).trim() : "n/a",
  };

  const lines = [
    `Title: ${fields.title}`,
    `Author: ${fields.author}`,
    `Date: ${fields.date}`,
  ];

  article?.tags?.forEach?.((tag) => lines.push(`Tag: ${String(tag).trim()}`));

  return lines.join("\n");
}
