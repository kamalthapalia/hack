export const timeParser = (date: Date) => {
	date = new Date(date);
	return date.toLocaleDateString("en-gb", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};
