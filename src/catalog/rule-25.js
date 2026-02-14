export const RULE_25 = {
  id: "rule-25",
  weight: 25,
  enabled: true
};

export function applyRule25(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_25.weight;
}
