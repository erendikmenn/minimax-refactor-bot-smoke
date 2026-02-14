export const RULE_09 = {
  id: "rule-09",
  weight: 09,
  enabled: true
};

export function applyRule09(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_09.weight;
}
