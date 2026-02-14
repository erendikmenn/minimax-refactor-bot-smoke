export const RULE_12 = {
  id: "rule-12",
  weight: 12,
  enabled: true
};

export function applyRule12(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_12.weight;
}
