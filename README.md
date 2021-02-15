## Introduction
Get exact searched value from any type of array.

# Installation
`npm install gxi-search-array --save`

# Usage
```javascript
import SearchedArray from 'gxi-search-array'

const students = [
    {
        name: 'John Smith',
        age: 15,
        sports: [
            {
                id: 1,
                name: 'Football'
            },
            {
                id: 4,
                name: 'Cricket'
            }
        ]
    },
    {
        name: 'Miller',
        age: 16,
        sports: [
            {
                id: 1,
                name: 'Football'
            }
        ]
    }
];

const searched = SearchedArray(students, 'Cricket');
console.log(searched)
/*
[
    {
        name: 'John Smith',
            age: 15,
            sports: [
            {
                id: 1,
                name: 'Football'
            },
            {
                id: 4,
                name: 'Cricket'
            }
        ]
    }
]

*/

```