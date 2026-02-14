export const RULE_06 = {
  id: "rule-06",
  weight: 06,
  enabled: true
};

export function applyRule06(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_06.weight;
}
