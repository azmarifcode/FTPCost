// to get the selected players numbers
function getOrderList() {
	const orderList = document.getElementById('order-list');
	return orderList;
}

function getall(elementId, btnId) {
	const orderLists = document.getElementById('order-list').childElementCount;
	if (orderLists === 5) {
		alert('you can select maximum 5 player');
		return;
	} else {
		const element = document.getElementById(elementId);
		const elementText = element.innerText;

		const orderList = getOrderList();

		const li = document.createElement('li');
		const liText = document.createTextNode(elementText);
		li.appendChild(liText);
		orderList.appendChild(li);
		document.getElementById(btnId).disabled = true;
	}
}

// select button of Cristiano Ronaldo
document.getElementById('btn1').addEventListener('click', function () {
	getall('Cristiano', 'btn1');
});

// select button of Kevin De Bruyne
document.getElementById('btn2').addEventListener('click', function () {
	getall('Kevin', 'btn2');
});

// select button of Lionel Messi
document.getElementById('btn3').addEventListener('click', function () {
	getall('Lionel', 'btn3');
});

// select button of Kylian Mbappe
document.getElementById('btn4').addEventListener('click', function () {
	getall('Kylian', 'btn4');
});

// select button of Mohamed Salah
document.getElementById('btn5').addEventListener('click', function () {
	getall('Mohamed', 'btn5');
});

// select button of robert lewandowski
document.getElementById('btn6').addEventListener('click', function () {
	getall('robert', 'btn6');
});

//calculating players cost
document
	.getElementById('player-calculate')
	.addEventListener('click', function () {
		const playerPerCost = document.getElementById('player-cost-field');
		const playersCostValue = parseFloat(playerPerCost.value);
		if (isNaN(playersCostValue) || playersCostValue < 0) {
			alert('Please provide a valid number');
			return;
		}
		const orderList = document.getElementById('order-list').childElementCount;
		const totalExpense = playersCostValue * orderList;
		const totalPlayerCostelement = document.getElementById(
			'player-total-expense',
		);
		totalPlayerCostelement.innerText = totalExpense;
	});

// Calculating all the cost included players, manager and coach
document
	.getElementById('total-cost-calculate')
	.addEventListener('click', function () {
		const playerPerCost = document.getElementById('player-cost-field');
		const playersCostValue = parseFloat(playerPerCost.value);
		if (isNaN(playersCostValue) || playersCostValue < 0) {
			alert('Please give all input with a valid number');
			return;
		}
		const orderList = document.getElementById('order-list').childElementCount;
		const totalExpense = playersCostValue * orderList;
		const totalPlayerCostelement = document.getElementById(
			'player-total-expense',
		);
		totalPlayerCostelement.innerText = totalExpense;

		const playerExpense = parseFloat(totalPlayerCostelement.innerText);
		const finalTotalCost = document.getElementById('final-Total');

		const managerCost = document.getElementById('manager-cost');
		const managerCostValue = parseFloat(managerCost.value);

		if (isNaN(managerCostValue) || managerCostValue < 0) {
			alert('Please provide a valid amout by number');
			return;
		}
		const coachCost = document.getElementById('coach-cost');
		const coachCostValue = parseFloat(coachCost.value);

		if (isNaN(coachCostValue) || coachCostValue < 0) {
			alert('Please provide a valid amout by number');
			return;
		}
		const finalExpenses = playerExpense + managerCostValue + coachCostValue;
		finalTotalCost.innerText = finalExpenses;
	});
