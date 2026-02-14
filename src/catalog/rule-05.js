export const RULE_05 = {
  id: "rule-05",
  weight: 05,
  enabled: true
};

export function applyRule05(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_05.weight;
}
