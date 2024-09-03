const basicGrid = [
    [{notes: [1,2,3,4,5,6,7,8,9], area: 0, number: 1},{notes: [1,2,3,4,5,6,7,8,9], area: 0, number: null},{notes: [1,2,3,4,5,6,7,8,9], area: 1, number: null},{notes: [1,2,3,4,5,6,7,8,9], area: 1, number: 4}],
    [{notes: [1,2,3,4,5,6,7,8,9], area: 0, number: 2},{notes: [1,2,3,4,5,6,7,8,9], area: 0, number: 3},{notes: [1,2,3,4,5,6,7,8,9], area: 1, number: 4},{notes: [1,2,3,4,5,6,7,8,9], area: 1, number: 1}],
    [{notes: [1,2,3,4,5,6,7,8,9], area: 2, number: 3},{notes: [1,2,3,4,5,6,7,8,9], area: 2, number: 4},{notes: [1,2,3,4,5,6,7,8,9], area: 3, number: 1},{notes: [1,2,3,4,5,6,7,8,9], area: 3, number: 2}],
    [{notes: [1,2,3,4,5,6,7,8,9], area: 2, number: 4},{notes: [1,2,3,4,5,6,7,8,9], area: 2, number: 1},{notes: [1,2,3,4,5,6,7,8,9], area: 3, number: 2},{notes: [1,2,3,4,5,6,7,8,9], area: 3, number: 3}]
]



basicGrid.forEach(row => console.log(row.map(cell=> cell.number)))