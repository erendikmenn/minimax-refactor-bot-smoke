export const RULE_04 = {
  id: "rule-04",
  weight: 04,
  enabled: true
};

export function applyRule04(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_04.weight;
}
