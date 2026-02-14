export const RULE_13 = {
  id: "rule-13",
  weight: 13,
  enabled: true
};

export function applyRule13(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_13.weight;
}
