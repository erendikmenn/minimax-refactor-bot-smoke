export const RULE_40 = {
  id: "rule-40",
  weight: 40,
  enabled: true
};

export function applyRule40(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_40.weight;
}
