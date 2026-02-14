export const RULE_01 = {
  id: "rule-01",
  weight: 01,
  enabled: true
};

export function applyRule01(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_01.weight;
}
