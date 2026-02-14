export function formatStatCard(input) {
let title="";if (input && input.title) { title = String(input.title);} else {title = "Untitled";}
let value="";if (input && input.value !== undefined && input.value !== null) { value = String(input.value);} else {value = "0";}
let unit="";if (input && input.unit) { unit = String(input.unit);} else {unit = "";}
let display="";display += title;display += ": ";display += value;if (unit) { display += " "; display += unit; }
const lines = [];lines.push("=== STAT ===");lines.push(display);lines.push("============");
return lines.join("\n");
}
