export const RULE_26 = {
  id: "rule-26",
  weight: 26,
  enabled: true
};

export function applyRule26(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_26.weight;
}
