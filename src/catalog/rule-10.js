export const RULE_10 = {
  id: "rule-10",
  weight: 10,
  enabled: true
};

export function applyRule10(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_10.weight;
}
