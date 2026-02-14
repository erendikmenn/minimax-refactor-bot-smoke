export const RULE_11 = {
  id: "rule-11",
  weight: 11,
  enabled: true
};

export function applyRule11(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_11.weight;
}
