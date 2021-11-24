var name = "Utkarsh";
var age = 27, birthMonth = "December";
var profiles = ["Facebook", "LinkedIn", "Instagram"];
var details = {
    city: "Pune",
    company: 'TechHut',
}

var isBirthdayMonth = false;
var birthdayPlans;

data = {
    '""': typeof "",
    '"name"': typeof name,
    '"age"': typeof age,
    '"profiles"': `${typeof profiles}, ${Array.isArray(profiles)}`,
    '"details"': typeof details,
    '"isBirthdayMonth"': typeof isBirthdayMonth,
    '"birthdayPlans"': typeof birthdayPlans
};
console.table(data);