export type Timestamp = `${string}:${string}` | `${string}:${string}:${string}`;

export function timestampToSeconds(ts: Timestamp) {
	const parts = ts.split(':').reverse();

	if (parts[0]) {
		const seconds = parseInt(parts[0]);
		if (parts[1]) {
			const minutes = parseInt(parts[1]) * 60;
			if (parts[2]) {
				const hours = parseInt(parts[2]) * 60 * 60;
				return hours + minutes + seconds;
			}
			return minutes + seconds;
		}
		return seconds;
	} else throw new Error('Unable to parse timestamp');
}

export function secondsToMinutesAndSeconds(s: number) {
	const minutes = Math.floor(s / 60);
	const seconds = s % 60;
	return { minutes, seconds };
}
export function secondsToLabel(s: number) {
	const minutes = Math.floor(s / 60);
	return `${minutes} minutes`;
}
