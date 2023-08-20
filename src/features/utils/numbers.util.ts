/**
 * @description Format number to K
 * @param number
 * @returns 1000 => 1K
 */
export const kiloFormatter = (number: number) => {
	if (number >= 1000) {
		return `${(number / 1000).toFixed(1)}K`;
	}

	return number;
};
