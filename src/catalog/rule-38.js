export const RULE_38 = {
  id: "rule-38",
  weight: 38,
  enabled: true
};

export function applyRule38(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_38.weight;
}
