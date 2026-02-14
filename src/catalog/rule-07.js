export const RULE_07 = {
  id: "rule-07",
  weight: 07,
  enabled: true
};

export function applyRule07(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_07.weight;
}
