export const RULE_36 = {
  id: "rule-36",
  weight: 36,
  enabled: true
};

export function applyRule36(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_36.weight;
}
