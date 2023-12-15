export function formatNumber(value: number): string {
  let formattedValue: string;

  if (value >= 1_000_000) {
    // Convert to millions and round to one decimal place
    formattedValue = (value / 1_000_000).toFixed(1) + "M";
  } else if (value >= 1_000) {
    // Convert to thousands and round to one decimal place
    formattedValue = (value / 1_000).toFixed(1) + "K";
  } else {
    // Use the original value for smaller numbers
    formattedValue = value.toString();
  }

  return formattedValue;
}
