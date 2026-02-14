export const RULE_30 = {
  id: "rule-30",
  weight: 30,
  enabled: true
};

export function applyRule30(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_30.weight;
}
