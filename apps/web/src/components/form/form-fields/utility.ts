export function handleAutocomplete(enable?: boolean) {
	if (enable === true) {
		return 'on';
	} else if (enable === false) {
		return 'off';
	} else {
		return undefined;
	}
}
