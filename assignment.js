// Create a function for calculating rewards

  function calculateRewards(amount) {
// 1 point for every dollar spent over $50 
    if (amount >=50 && amount <= 100) {
        return amount-50;
    } else if (amount >100){
 // 2 points for every dollar spent over $100 and add 50 
        return (2*(amount-100) + 50);
    }
    return 0;
}


// Creating Transaction class
class Transaction {
    constructor(amount) {
        this.amount = amount;
        this.points = calculateRewards(amount);
        this.purchaseDate = new Date();
    }
}

// Creating Transaction List Class
class TransactionList {
    constructor() {
        this.list = [];
    }
   
    addTransaction(amount) {
        const transaction = new Transaction(amount);
        this.list.push(transaction);
    }

    getEveryTransactions() {
        return this.list.sort((a,b) => b.purchaseDate - a.purchaseDate);
    }

    getTotalPoints() {
        return this.list.length ? this.list.reduce((acc,key)=>key.points+acc, 0) : 0;
    }

    pointPerMonth() {
        let lastThreeMonthPoints = [];
        for(let i=0; i<3; i++) {
            let storeList = this.list.filter(purchase => purchase.purchaseDate.getMonth() == (new Date).getMonth() - i );
            lastThreeMonthPoints[i] = storeList.reduce((acc,key)=>key.points+acc,0);
        }
        return lastThreeMonthPoints 
    }

    getLast3MonthsList() {
        var today = new Date();
        const threeMonthDate = today.setMonth(today.getMonth() - 3);
        let storeList = this.list.filter(purchase => purchase.purchaseDate > threeMonthDate);
        return storeList.sort((a,b) => b.purchaseDate - a.purchaseDate);
    }

}

// Adding Transactions
let displayTransactionList = new TransactionList();
displayTransactionList.addTransaction(24);
displayTransactionList.addTransaction(76);
displayTransactionList.addTransaction(100);
displayTransactionList.addTransaction(39);
displayTransactionList.addTransaction(167);


// displayTransactionList.getEveryTransactions();  Gives Total Transactions.
// displayTransactionList.pointPerMonth();         Gives points per month
// displayTransactionList.getTotalPoints();        Gives Total Points
// displayTransactionList.getLast3MonthsList();    Three month Transaction list