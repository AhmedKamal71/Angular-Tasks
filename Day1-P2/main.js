class Account {
    constructor(Acc_no = 0, Balance = 0) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() {
    }
    creditAmount() {
    }
    getBalance() {
    }
}
class Current_Account extends Account {
    constructor(Acc_no = 0, Balance = 0, Interest_rate = 0) {
        super(Acc_no, Balance);
        this.Interest_rate = Interest_rate;
        this.Date_of_opening = "Class Current_Account";
    }
    addCustomer() {
    }
    removeCustomer() {
    }
}
class Saving_Account extends Account {
    constructor(Acc_no = 0, Balance = 0, Min_Balance = 0) {
        super(Acc_no, Balance);
        this.Min_Balance = Min_Balance;
        this.Date_of_opening = "Class Saving_Account";
    }
    addCustomer() {
    }
    removeCustomer() {
    }
}
