export const RULE_31 = {
  id: "rule-31",
  weight: 31,
  enabled: true
};

export function applyRule31(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_31.weight;
}
