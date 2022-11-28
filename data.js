
var dataSelect = {
    id: 'field_0_3',
    option: [
        {
            id: '1',
            value: 'a'
        }, {
            id: '2',
            value: 'b'
        }, {
            id: '3',
            value: 'c'
        }, {
            id: '4',
            value: 'd'
        }
    ]
}
var inputs = [
    {
        title: 'Account',
        type: 'text',
        value: '11221abs',
        id: 'field_1',
        // Validation
        isTouch: false,
        required: true
    },
    {
        title: 'Number',
        type: 'number',
        value: undefined,
        id: 'field_2',
        // Validation
        isTouch: false,
        required: false
    },
    {
        title: 'Password',
        type: 'text',
        value: undefined,
        id: 'field_3',
        // Validation
        isTouch: false,
        required: true
    }, 
    // {
    //     title: 'Password',
    //     type: 'password',
    //     value: undefined,
    //     id: 'field_3',
    //     // Validation
    //     isTouch: false,
    //     required: true
    // }, 
    // {
    //     title: 'Date',
    //     type: 'date',
    //     value: undefined,
    //     id: 'field_3',
    //     // Validation
    //     isTouch: false,
    //     required: true
    // }, 
    {
        title: 'Option', 
        type: 'option', 
        value: undefined, 
        isTouch: false, 
        required: true, 
        data: dataSelect, 
        onchange: false
    }
]
var dataRows = [];

for (let i = 0; i < 4; i++) {
    let input = []
    for (let j = 0; j < inputs.length; j++) {
        //inputs[j].id = `field_${i}_${j}`;
        //input.push(inputs[j]);
        let cell = JSON.parse(JSON.stringify(inputs[j]));
        cell['id'] = `field_${i}_${j}`;
        input.push(cell);
    }
    dataRows.push(input);
}
// rule

console.log(dataRows);
function requiredRule(value) {
    if (value) return true;
    else return false;
}

function numberNDecimal(value) {

}







