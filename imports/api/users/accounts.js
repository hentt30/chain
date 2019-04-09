import { Accounts } from 'meteor/accounts-base';

notes = [{
    id: 1,
    label: '1',
    value: '1'
}, {
    id: 2,
    label: '2',
    value: '2',
}, {
    id: 3,
    label: '3',
    value: '3',
}, {
    id: 4,
    label: '4',
    value: '4',
}, {
    id: 5,
    label: '5',
    value: '5',
}]

subjects = [
    ['politica', 'musica', 'esportes', 'filmes', 'comida'],
    ['Política', 'Música', 'Esportes', 'Filmes', 'Comida']
];

num_subjects = 5;

var fields_subjects = [];

for (i = 0; i < num_subjects; i++) {
    fields_subjects.push({
        fieldName: subjects[0][i],
        fieldLabel: subjects[1][i],
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Você gosta de ' + subjects[1][i] + ' ?!',
        data: notes,
        visible: true
    });
}

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
            if (!value) {
                errorFunction("Please write your first name");
                return false;
            } else {
                return true;
            }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
        }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    },
        fields_subjects[0],
        fields_subjects[1],
        fields_subjects[2],
        fields_subjects[3],
        fields_subjects[4],
        {
            fieldName: 'terms',
            fieldLabel: 'I accept the terms and conditions',
            inputType: 'checkbox',
            visible: true,
            saveToProfile: false,
            validate: function(value, errorFunction) {
                if (value) {
                    return true;
                } else {
                    errorFunction('You must accept the terms and conditions.');
                    return false;
                }
            }
        }]
});