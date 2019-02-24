import { createStore, combineReducers } from 'react-redux'; 

const expensifyDemoState = {
  expenses: [{
    id:           'pasdoifasdf',
    description:  'January Rent',
    note:         'This was the final payment for that address',
    amount:       54500,
    createdAt:    0
  }],
  filters: {
    text: 'rent',
    sortBy:'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const fifteen30DemoState = {
  days: {
    byId: {
      '05122018': {
        id: '05122018',
        noteCategories: ['noteCategory1234567890'],
        employeeCategories: ['employeeCategory1234567890']
      }
    }
  },
  noteCategories: {
    noteCategory1234567890: {
      title: 'OBRC',
      notes: ['note1234567890']
    }
  },
  employeeCategories: {
    employeeCategory1234567890: {
      title: 'Cashiers',
      employees: ['employee1234567890']
    }
  },
  notes: {
    note1234567890: {
      id: 'note1234567890',
      text: 'Had to trespass a canner today',
    }
  },
  employees: {
    employee1234567890: {
      id: 'employee1234567890',
      name: 'Aaron',
    }
  }
};