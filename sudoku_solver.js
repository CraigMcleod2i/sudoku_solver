function get_area(r, c) {
	return 2 * Math.floor(r / 2) + Math.floor(c / 2);
}

class Cell {
	constructor(r, c) {
		this.r = r;
		this.c = c;
		this.a = get_area(r, c);
		this.poss = [1, 2, 3, 4];
		this.sol = null;
	}
}

let cells = [];

for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 4; j++) {
		cells.push(new Cell(i, j, 0));
	}
}

console.log(cells[0]);

challenge = [
	[0, 1, 3],
	[0, 2, 4],
	[1, 0, 4],
	[1, 3, 2],
	[2, 0, 1],
	[2, 3, 3],
	[3, 1, 2],
	[3, 2, 1],
];

for (s = 0; s < challenge.length; s++) {
	for (let cell = 0; s < cells.length; cell++) {
		if (cell.r == s[0]) {
			if (cell.c == s[1]) {
				cell.poss = [];
				cell.sol = s[2];
				break;
			}
		}
	}
}

console.log(cells[3]);
