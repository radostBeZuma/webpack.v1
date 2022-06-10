document.addEventListener("DOMContentLoaded", () => {
	const block = "top-block";

	let text = document.querySelector(`.${block}__text`);

	text.addEventListener("click", () => {
		alert("Yes");
	});
});w