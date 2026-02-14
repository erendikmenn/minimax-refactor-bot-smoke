export const RULE_27 = {
  id: "rule-27",
  weight: 27,
  enabled: true
};

export function applyRule27(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_27.weight;
}
