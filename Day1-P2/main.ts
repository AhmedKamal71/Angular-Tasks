class Account {
    constructor(public Acc_no = 0, public Balance = 0) {

    }
    debitAmount() {

    }

    creditAmount() {

    }

    getBalance() {

    }
}

interface IAccount {
    Date_of_opening: string;
    addCustomer(): void;
    removeCustomer(): void;
}

class Current_Account extends Account implements IAccount {
    Interest_rate: number;
    Date_of_opening: string;

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

class Saving_Account extends Account implements IAccount {
    Min_Balance: number;
    Date_of_opening: string;

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
