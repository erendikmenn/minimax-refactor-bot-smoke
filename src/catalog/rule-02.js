export const RULE_02 = {
  id: "rule-02",
  weight: 02,
  enabled: true
};

export function applyRule02(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_02.weight;
}
