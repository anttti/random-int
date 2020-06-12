export function randomInt(min: number, max?: number): number {
  if (max === undefined) {
		max = min;
		min = 0;
	}

	return Math.floor(
		(Math.random() * (max - min + 1)) + min
	);
}
