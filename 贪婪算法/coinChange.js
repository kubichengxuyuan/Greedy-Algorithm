// 问题：有1元、5元、10元、50元、100元。现在要用这些硬币来支付A元，最少需要多少枚硬币？若有解，输出最少硬币数；否则输出“-1”。

let start;
let coin = [
	{
		value: 1,
		number: 5
	},
	{
		value: 5,
		number: 1
	},
	{
		value: 10,
		number: 2
	},
	{
		value: 50,
		number: 1
	},
	{
		value: 100,
		number: 1
	},
];
let change = [];

function init() {
	change = [];
	start = undefined;
}

function filterCoin(price) {
	for (; price > 0;) {
		let obj = {
			value: 0,
			number: 0
		};
		if (price >= coin[start].value && coin[start].number > 0) {
			price = price - coin[start].value;
			coin[start].number--;
			if (change.length > 0 && change[change.length - 1].value === coin[start].value) {
				change[change.length - 1].number++;
			} else {
				obj.value = coin[start].value;
				obj.number++;
				change.push(obj);
			}
		} else {
			if (start > 0) {
				start--;
			} else {
				change = [];
				return;
			}
		}
	}
}

function printChange() {
	let result = "";
	for (let i = 0; i < change.length; i++) {
		result = result + change[i].value + "元" + change[i].number + "张" + "	";
	}
	return !result ? "没有足够的零钱" : result;
}

function changeCoin(price) {
	init();
	for (let i = coin.length - 1; !start; i--) {
		if (price >= coin[i].value) start = i;
	}
	filterCoin(price);
	console.log(printChange());
}

changeCoin(100);
changeCoin(70);
changeCoin(6);
changeCoin(6);