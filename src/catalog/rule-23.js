export const RULE_23 = {
  id: "rule-23",
  weight: 23,
  enabled: true
};

export function applyRule23(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_23.weight;
}
