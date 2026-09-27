<%*
let Aufgabe = await tp.system.prompt("Aufgaben Name") || "Aufgabenstellung";
let Aufgabenstellung = await tp.system.prompt("Aufgabenstellung") || "*Aufgabenstellung*";

const hasSubCallouts = await tp.system.suggester(
    ["Yes", "No"], 
    [true, false], 
    false, 
    "Hat die Aufgabe Unteraufgaben?"
);

let nestCount = 0;
if (hasSubCallouts) {
    nestCount = await tp.system.suggester(
        ["1 Unteraufgabe", "2 Unteraufgaben", "3 Unteraufgaben", "4 Unteraufgaben", "5 Unteraufgaben", "6 Unteraufgaben", "7 Unteraufgaben", "8 Unteraufgaben", "9 Unteraufgaben", "10 Unteraufgaben"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
        false, 
        "Wie viele Unteraufgaben hat die Aufgabe?"
    );
}

let output = `> [!info] **${Aufgabe}**\n> ${Aufgabenstellung}\n>`;

let Labels = ["", "a)", "b)", "c)", "d)", "e)", "f)", "g)", "h)", "i)", "j)"];

if (nestCount > 0) {
    let arrows = ">";
    for (let i = 1; i <= nestCount; i++) {
        output += `\n> > [!question]+ **${Labels[i]}**\n> > Aufgabenstellung ${Labels[i]}.\n> > \n> > > [!todo]- **Lösung**\n> > > *${Aufgabe}: Lösung*\n> > >\n>`;
    }
}

tR += output + "\n\n---\n";
%>