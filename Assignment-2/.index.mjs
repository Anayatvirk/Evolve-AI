import figlet from "figlet";
import { Chalk } from "chalk";

const chalk = new Chalk({ level: 3 }); // enable colors

figlet("Evolve AI!", (err, data) => {
    if (err) return console.error(err);
    console.log(chalk.rgb(255, 105, 180)(data)); // Pink (RGB)
});






