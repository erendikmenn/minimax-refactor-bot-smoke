export const RULE_14 = {
  id: "rule-14",
  weight: 14,
  enabled: true
};

export function applyRule14(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_14.weight;
}
