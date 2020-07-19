import DueDate from "../data/models/dueDate";

export const getToday = () => {
    return new Date();
};

export const getTomorrow = () => {
    let tomorrow = new Date(getToday());
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
};

// todo
export const isLater = dueDate => {
    var GivenDate = new Date(dueDate.year, dueDate.month, dueDate.day);
    var CurrentDate = new Date();
    return (GivenDate > CurrentDate);
};

export const getDueDate = date => {
    return new DueDate(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );
};



