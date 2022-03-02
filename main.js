const prompt = require("prompt-sync")({ signit: true });
const chalk = require("chalk");
let weight;
let price;
let randomFishy;
let youMissed;
let randomHrs = Math.round(Math.random());
let randomMins = Math.floor(Math.random() * (59 - 1 + 1) + 1);
let hours= 6;
let mins = 00;
let clock = hours + ":" + (mins + randomMins);
let time = 6;


let bucket = {
	currentTime: 0,
	totalWeight: 0,
	totalValue: 0,
	typeFish: [],
};

let fish = [
	"Pink Tiny luvdisc",
	"Green Fat Basculin",
	"Slimy Ugly Ramoraid",
	"Blue Old Whiscash",
	"Tricolor Hungry Carvanha",
	"Blue neon Lumineon",
	"Shiny Pink Gorebyss",
	"Golden Shiny Magikarp",
	"Brown Dirt Relicanth",
	"Orange Black Seaking",
];

// opening Screen
// console.log(chalk.red("==========================================================================================================="));
// console.log("")
// console.log(chalk.bgRed("                 ██████╗  ██████╗ ███╗   ██╗███████╗    ███████╗██╗███████╗██╗  ██╗██╗███╗   ██╗ ██████╗" ));
// console.log(chalk.bgRed("                 ██████╗  ██████╗ ███╗   ██╗███████╗    ███████╗██╗███████╗██╗  ██╗██╗███╗   ██╗ ██████╗" ));
// console.log(chalk.bgRed("                ██║  ███╗██║   ██║██╔██╗ ██║█████╗      █████╗  ██║███████╗███████║██║██╔██╗ ██║██║  ███╗"));
// console.log(chalk.bgRed("                ██║   ██║██║   ██║██║╚██╗██║██╔══╝      ██╔══╝  ██║╚════██║██╔══██║██║██║╚██╗██║██║   ██║"));
// console.log(chalk.bgRed("                ╚██████╔╝╚██████╔╝██║ ╚████║███████╗    ██║     ██║███████║██║  ██║██║██║ ╚████║╚██████╔╝"));
// console.log(chalk.bgRed("                ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ "));
// console.log("")
// console.log(chalk.red("============================================================================================================="));                                                                                        









                                                                                                                                                                                        
console.log(chalk.bgRed("────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────"));
console.log("");
console.log(chalk.bgRed("─██████████████──██████████████──██████──────────██████──██████████████        ██████████████──██████████──██████████████──██████──██████──██████████──██████──────────██████──██████████████───────────────────"));
console.log(chalk.bgRed("─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██        ██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██───────────────────"));
console.log(chalk.bgRed("─██░░██████████──██░░██████░░██──██░░░░░░░░░░██──██░░██──██░░██████████        ██░░██████████──████░░████──██░░██████████──██░░██──██░░██──████░░████──██░░░░░░░░░░██──██░░██──██░░██████████───────────────────"));
console.log(chalk.bgRed("─██░░██──────────██░░██──██░░██──██░░██████░░██──██░░██──██░░██────────        ██░░██────────────██░░██────██░░██──────────██░░██──██░░██────██░░██────██░░██████░░██──██░░██──██░░██───────────────────────────"));
console.log(chalk.bgRed("─██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──██░░██████████        ██░░██████████────██░░██────██░░██████████──██░░██████░░██────██░░██────██░░██──██░░██──██░░██──██░░██───────────────────────────"));
console.log(chalk.bgRed("─██░░██──██████──██░░██──██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██        ██░░░░░░░░░░██────██░░██────██░░░░░░░░░░██──██░░░░░░░░░░██────██░░██────██░░██──██░░██──██░░██──██░░██──██████───────────────────"));
console.log(chalk.bgRed("─██░░██──██░░██──██░░██──██░░██──██░░██──██░░██──██░░██──██░░██████████        ██░░██████████────██░░██────██████████░░██──██░░██████░░██────██░░██────██░░██──██░░██──██░░██──██░░██──██░░██───────────────────"));
console.log(chalk.bgRed("─██░░██──██░░██──██░░██──██░░██──██░░██──██░░██████░░██──██░░██────────        ██░░██────────────██░░██────────────██░░██──██░░██──██░░██────██░░██────██░░██──██░░██████░░██──██░░██──██░░██───────────────────"));
console.log(chalk.bgRed("─██░░██████░░██──██░░██████░░██──██░░██──██░░░░░░░░░░██──██░░██████████        ██░░██──────────████░░████──██████████░░██──██░░██──██░░██──████░░████──██░░██──██░░░░░░░░░░██──██░░██████░░██───────────────────"));
console.log(chalk.bgRed("─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──██░░░░░░░░░░██        ██░░██──────────██░░░░░░██──██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░██──██░░██──██████████░░██──██░░░░░░░░░░██───────────────────"));
console.log(chalk.bgRed("─██████████████──██████████████──██████──────────██████──██████████████        ██████──────────██████████──██████████████──██████──██████──██████████──██████──────────██████──██████████████───────────────────"));
console.log("");
console.log(chalk.bgRed("─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────"));








console.log(
	chalk.white.bold(
		chalk.bgRed(
			"\nYou've gone fishing! Try to get as many fish for your money! " +
				chalk.white("You can fish for six hours until 12:00pm") +
				" and can catch at most " +
				chalk.white("10 lbs of fish.")
		)
	)
);

function getStatus() {
	if (time < 12) {
		console.log(
			"The time is " +
				chalk.red(time) +
				chalk.red(":00am") +
				". So far you've caught: "
		);
		console.log(
			chalk.greenBright(bucket["typeFish"].length) +
				" fish, " +
				chalk.green(bucket["totalWeight"].toFixed(2)) +
				" lbs, $" +
				chalk.yellowBright(bucket["totalValue"].toFixed(2))
		);
	}
}

function getCaughtFish() {
	randomFishy = Math.floor(Math.random() * 10);
	youMissed = Math.ceil(Math.random() * 10);

	if (youMissed === 9) {
		console.log(chalk.red("\nYou caught were not able to catch Anything!!"));
	} else {
		weight = (Math.random() * (Math.random() * 9)).toFixed(2);
		price = (weight * 2.05).toFixed(2);
		console.log(
			"\nYou caught a '" +
				chalk.yellowBright(fish[randomFishy]) +
				"' weighing " +
				chalk.greenBright(weight) +
				" lbs and valued at $" +
				chalk.green(price)
		);
	}
}

function catchTheFish() {
	if (youMissed === 9) {
	} else {
		console.log(chalk.red("\nYou chose to keep the fish."));
		bucket["totalWeight"] += Number(weight);
		bucket["totalValue"] += Number(price);
		bucket["typeFish"].push({
			name: fish[randomFishy],
			weight: weight,
			cash: price,
		});
	}
}

function catchRelease() {
	console.log(
		"\nYour action: " +
			chalk.red("[c]") +
			"atch or " +
			chalk.red("[r]") +
			"elease?"
	);
	let choice = prompt("> ");

	if (choice.toLowerCase() === "c") {
		if (Number(bucket["totalWeight"]) + Number(weight) > 10) {
			console.log(
				"\nThis fish would put you " +
					chalk.red(
                        chalk.bgWhiteBright("over 10 lbs") +
					", so you release it."
			));
			console.log("\nPress " + chalk.red("[enter]") + " to continue.");
			choice = prompt("> ");
		} else {
			catchTheFish();
		}
	} else if (choice.toLowerCase() === "r") {
		console.log(chalk.red("\nYou chose to release the fish."));
	} else {
		console.log(
			chalk.red("\nYou chose niether [c] or [r] and the fish got away!.")
		);
	}

	time++;
}

function printCaughtFish() {
	for (let i = 0; i < bucket["typeFish"].length; i++) {
		console.log(
			"* " +
				chalk.greenBright(bucket.typeFish[i].name) +
				", " +
				chalk.yellowBright(bucket.typeFish[i].weight) +
				" lbs, $" +
				chalk.redBright(bucket.typeFish[i].cash)
		);
	}
}

while (time < 12 && bucket["totalWeight"] <= 10) {
	console.log("\n==============================================\n");

	getStatus();
	getCaughtFish();
	catchRelease();
}

console.log("\n==============================================\n");

console.log("The time is " + chalk.red(time + ":00pm") + ". Times up!\n");

console.log("You caught " + chalk.white(bucket["typeFish"].length) + " fish:");
printCaughtFish();

console.log(
	"\nTotal weight: " + chalk.yellowBright(bucket["totalWeight"].toFixed(2)) + " lbs"
);
console.log("Total value: $" + chalk.greenBright(bucket["totalValue"].toFixed(2)));
console.log("");
console.log(chalk.white("   .................................................................................."));
console.log("");
console.log(chalk.red("    ..####....####...##...##..######...........####...##..##..######..#####........"));
console.log(chalk.white("   ..##......##..##..###.###..##..............##..##..##..##..##......##..##........."));
console.log(chalk.red("   ..##.###..######..##.#.##..####............##..##..##..##..####....#####.........."));
console.log(chalk.white("   ..##..##..##..##..##...##..##..............##..##...####...##......##..##........."));
console.log(chalk.red("   ...####...##..##..##...##..######...........####.....##....######..##..##........."));
console.log("");
console.log(chalk.white("   .................................................................................."));