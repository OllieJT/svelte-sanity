/* eslint-disable  */
export function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.replace('&', 'and')
		.replace('@', 'at')
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

export function prettyUrl(url: string | undefined) {
	let value = '';
	if (typeof url != 'string') return value;
	try {
		const urlz = new URL(url);
		value = urlz.hostname;
		return value;
	} catch {
		return value;
	}
}
