// Task One
const classfifth = [
    {
        name: 'Istiak Robin',
        roll: 1,
        class: 'Five',
        bn: 89,
        en: 90,
        math: 46,
        sci: 65,
        ssci: 64,
        total_marks: 354,
        final_grade: 'A',
        total_CGPA: 3.5

    },
    {
        name: 'Fahmida Ferdaus',
        roll: 2,
        class: 'Five',
        bn: 56,
        en: 86,
        math: 76,
        sci: 87,
        ssci: 65,
        total_marks: 370,
        final_grade: 'A',
        total_CGPA: 3.5
    },
    {
        name: 'Sayem Ahmed',
        roll: 3,
        class: 'Five',
        bn: 97,
        en: 76,
        math: 78,
        sci: 45,
        ssci: 98,
        total_marks: 394,
        final_grade: 'A',
        total_CGPA: 3.5
    },
    {
        name: 'Nishat Shubah',
        roll: 4,
        class: 'Five',
        bn: 56,
        en: 53,
        math: 23,
        sci: 65,
        ssci: 65,
        total_marks: 262,
        final_grade: 'A-',
        total_CGPA: 3
    },
    {
        name: 'Imtiaz Abir',
        roll: 5,
        class: 'Five',
        bn: 44,
        en: 56,
        math: 85,
        sci: 67,
        ssci: 98,
        total_marks: 350,
        final_grade: 'A',
        total_CGPA: 3.5
    }
];

console.log(JSON.stringify(classfifth));

// Task Two
const phonebook =[
    {
        Name: 'Istiak Robin',
        PhoneNumber: '01855726982',
        Age: 22
    },
    {
        Name: 'Iqbal Hossain',
        PhoneNumber: '01855726983',
        Age: 52
    },
    {
        Name: 'Imtiaz Hossain',
        PhoneNumber: '01855726983',
        Age: 18
    },
    {
        Name: 'Rabeya akter rumi',
        PhoneNumber: '01955726984',
        Age: 41
    },
];
console.log(JSON.stringify(phonebook));

//Task Three
const Developer= [
    {
        Name: 'Ashraful Hoqe',
        Age: 32,
        Skill: 'MERN Developer'
    },
    {
        Name: 'Nahiyan Khandakar',
        Age: 24,
        Skill: 'MERN Developer'
    },
    {
        Name: 'Munira Akter',
        Age: 22,
        Skill: 'MERN Developer'
    },
    {
        Name: 'Rafikul Islam',
        Age: 28,
        Skill: 'Laravel Developer'
    },
    {
        Name: 'Anas FEI',
        Age: 24,
        Skill: 'Laravel Developer'
    },
    {
        Name: 'Nishat Shubah',
        Age: 24,
        Skill: 'Django Developer'
    },
    {
        Name: 'Sayem Ahmed',
        Age: 24,
        Skill: 'GoLan Developer'
    },
    {
        Name: 'Golam Haider',
        Age: 24,
        Skill: 'WordPress Developer'
    }
];
console.log(JSON.stringify(Developer));

//Task Four
let dataOne = `[{"name":"Istiak Robin","roll":1,"class":"Five","bn":89,"en":90,"math":46,"sci":65,"ssci":64,"total_marks":354,"final_grade":"A","total_CGPA":3.5},{"name":"Fahmida Ferdaus","roll":2,"class":"Five","bn":56,"en":86,"math":76,"sci":87,"ssci":65,"total_marks":370,"final_grade":"A","total_CGPA":3.5},{"name":"Sayem Ahmed","roll":3,"class":"Five","bn":97,"en":76,"math":78,"sci":45,"ssci":98,"total_marks":394,"final_grade":"A","total_CGPA":3.5},{"name":"Nishat Shubah","roll":4,"class":"Five","bn":56,"en":53,"math":23,"sci":65,"ssci":65,"total_marks":262,"final_grade":"A-","total_CGPA":3},{"name":"Imtiaz Abir","roll":5,"class":"Five","bn":44,"en":56,"math":85,"sci":67,"ssci":98,"total_marks":350,"final_grade":"A","total_CGPA":3.5}]` 

let dataTwo = `[{"Name":"Istiak Robin","PhoneNumber":"01855726982","Age":22},{"Name":"Iqbal Hossain","PhoneNumber":"01855726983","Age":52},{"Name":"Imtiaz Hossain","PhoneNumber":"01855726983","Age":18},{"Name":"Rabeya akter rumi","PhoneNumber":"01955726984","Age":41}]`

let dataThree = `[{"Name":"Ashraful Hoqe","Age":32,"Skill":"MERN Developer"},{"Name":"Nahiyan Khandakar","Age":24,"Skill":"MERN Developer"},{"Name":"Munira Akter","Age":22,"Skill":"MERN Developer"},{"Name":"Rafikul Islam","Age":28,"Skill":"Laravel Developer"},{"Name":"Anas FEI","Age":24,"Skill":"Laravel Developer"},{"Name":"Nishat Shubah","Age":24,"Skill":"Django Developer"},{"Name":"Sayem Ahmed","Age":24,"Skill":"GoLan Developer"},{"Name":"Golam Haider","Age":24,"Skill":"WordPress Developer"}]
`
console.log(JSON.parse(dataOne));
console.log(JSON.parse(dataTwo));
console.log(JSON.parse(dataThree));
