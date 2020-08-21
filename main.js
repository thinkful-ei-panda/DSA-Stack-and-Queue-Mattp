const Stack = require('./stack');
const Queue = require('./queue');

const starTrek = new Stack();
starTrek.push(`Kirk`);
starTrek.push(`Spock`);
starTrek.push(`McCoy`);
starTrek.push(`Scotty`);

const peek = ({ top }) => {
	console.log(top.data);
};
console.log(' ');
console.log(`Peek: `);
console.log(' ');
peek(starTrek);
console.log(' ');

const isEmpty = (stack) => {
	return stack.top ? false : true;
};

console.log(' ');
console.log(`isEmpty: `);
console.log(' ');
console.log(isEmpty(starTrek));
console.log(' ');

const display = ({ top }) => {
	console.log(top);
};
console.log(' ');
console.log(`Display: `);
console.log(' ');
display(starTrek);
console.log(' ');

starTrek.pop();
console.log('Pop');
starTrek.pop();
console.log('Pop');
console.log(' ');
display(starTrek);
console.log(' ');

const is_palindrome = (string) => {
	let shortString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
	// if there are only two characters and ends match
	if (shortString.length === 3 && shortString[0] === shortString[2]) {
		return true;
	}
	// create a stack
	const stringStack = new Stack();
	for (let i = 0; i < shortString.length; i++) {
		// add string characters in order to new stack
		stringStack.push(shortString[i]);
	}
	for (let char of shortString) {
		// if no characters match return false
		if (char !== stringStack.pop()) {
			return false;
		}
	}
	// passes checks
	return true;
};
console.log(' ');
// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

/**
 * 4. Matching parentheses in an expression
A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis
 */

const syntax = (string) => {
	const stack = new Stack();
	const key = {
		['(']: ')',
		['{']: '}',
		['[']: ']',
		['"']: '"',
		["'"]: "'",
	};

	for (const char of string) {
		if (char === '(' || char === '{' || char === '[') {
			stack.push(char);
		} else if (char === ')' || char === '}' || char === ']') {
			let last = stack.pop();
			if (char !== key[last]) return false;
		}
	}
	if (stack.top) return false;
	return true;
};
console.log(' ');
console.log('Matching brackets');
console.log(syntax(`f = n + (n - 1) + (n^2`));
console.log(syntax(`f = n + (n - 1) + (n^2)`));

/**
 * '(....' - false
 * '(....)' - true
 * Takes in a string
 *  Loop through string
 * For each character, if there is a parenth, push to stack
 *    If there is a closing character, pop from stack
 *        if they are matching pair, continue,
 *          else through error
 *  if stack has a length, starting bracket, then throw error
 */
/**
 * stack = ['(', ]
 * 'f = n + (n - 1) + (n^2' - false
 *    while stack.length
 *
 */
/**
 * 5. Sort stack
Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).
 */

/**
 * Stacks A and B
 * A - [1, ,  ]
 * B - [2, 3]
 * let current 4
 *
 * 1. Grab A
 * 2. If B is empty or current is greater than B, put on B
 * 3. If current is smaller than B, pop from B and put on A
 *   - put current on B
 * 4. If a is empty quit
 */
const sortStack = (stack) => {
	const A = stack;
	const B = new Stack();

	while (A.top) {
		let current = A.pop();
		console.log(current);
		while (B.top && B.top.data <= current) {
			A.push(B.pop());
		}
		B.push(current);
	}

	return B;
};
const unsortedStack = () => {
	const uStack = new Stack();
	uStack.push(1); // 1, 4, 3, 2
	uStack.push(4);
	uStack.push(3);
	uStack.push(2);
	return uStack;
};

console.log(' ');
console.log('Sort Stack');
console.log(sortStack(unsortedStack())); // 1, 2, 3 ,4
