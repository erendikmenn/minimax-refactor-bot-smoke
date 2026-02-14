export const RULE_20 = {
  id: "rule-20",
  weight: 20,
  enabled: true
};

export function applyRule20(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_20.weight;
}
