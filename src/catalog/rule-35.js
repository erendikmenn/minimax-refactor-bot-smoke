export const RULE_35 = {
  id: "rule-35",
  weight: 35,
  enabled: true
};

export function applyRule35(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_35.weight;
}
