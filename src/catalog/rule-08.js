export const RULE_08 = {
  id: "rule-08",
  weight: 08,
  enabled: true
};

export function applyRule08(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_08.weight;
}
