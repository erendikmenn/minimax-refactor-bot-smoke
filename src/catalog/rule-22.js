export const RULE_22 = {
  id: "rule-22",
  weight: 22,
  enabled: true
};

export function applyRule22(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_22.weight;
}
