// N个人过河，船每次只能坐两个人，船载每个人过河的所需时间不同，每次过河的时间为船上的人的较慢的那个，最快的过河时间为多少？(船划过去要有一个人划回来)
// 假如现在有四个人需要过河，其中这四个人过河分别要花费的时间是：小明：1，小红：2，张三：5，胖虎：10

function planA() {
	let time = 0;
	let bank = [1, 2, 8, 10];
	let opposite_bank = [];
	bank.sort((a, b) => {return a - b});
	for (; bank.length > 0;) {
		opposite_bank.push(bank.shift());
		time += bank[bank.length - 1];
		opposite_bank.push(bank.pop());
		opposite_bank.sort((a, b) => {
			return a - b
		});
		if (bank.length > 0) {
			time += opposite_bank[0];
			bank.push(opposite_bank.shift());
		}
		bank.sort((a, b) => {return a - b});
	}
	console.log(time);
}

function planB() {
	let time = 0;
	let bank = [1, 2, 8, 10];
	let opposite_bank = [];
	let first, second;
	bank.sort((a, b) => {
		return a - b
	});
	first = bank[0];
	second = bank[1];
	for (; bank.length > 0;) {
		if (bank.includes(first) && bank.includes(second)) {
			opposite_bank.push(bank.shift());
			time += bank[0];
			opposite_bank.push(bank.shift());
			opposite_bank.sort((a, b) => {return a - b});
		} else {
			time += bank[bank.length-1];
			opposite_bank.push(bank.pop());
			opposite_bank.push(bank.pop());
			opposite_bank.sort((a, b) => {return a - b});
		}
		if (bank.length > 0) {
			time += opposite_bank[0];
			bank.push(opposite_bank.shift());
		}
		bank.sort((a, b) => {return a - b});
	}
	console.log(time);
}

planA();
planB();