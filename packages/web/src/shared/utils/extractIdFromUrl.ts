export function extractIdFromUrl (url: string) {
	return parseInt(url.replace(/[^0-9]/g, ''), 10);
	// return parseInt(url.replace(/^.*(\d+).*$/i,'$1'), 10);
}