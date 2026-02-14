export function formatStatCard(input) {
  const title = input?.title ? String(input.title) : "Untitled";
  const value = input?.value != null ? String(input.value) : "0";
  const unit = input?.unit ? String(input.unit) : "";

  const display = unit ? `${title}: ${value} ${unit}` : `${title}: ${value}`;

  return [
    "=== STAT ===",
    display,
    "============"
  ].join("\n");
}
