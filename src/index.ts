function greetName(name: string) {
	console.log("HI" + name.toUpperCase() + "!");
}

greetName(Math.random() > 0.5 ? "ikhrom" : "anonymous");
