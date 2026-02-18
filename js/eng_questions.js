const problems = [
    {
        id: 1,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] }
        ]
    },
    {
        id: 2,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 3,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 4,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'g3', col: 3, row: 1, inputs: ['g2', 3] }
        ]
    },
    {
        id: 5,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 2] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 3] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 1] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g2'] }
        ]
    },
    {
        id: 6,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 'g2'] }
        ]
    },
    {
        id: 7,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 3] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 'g2'] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 0] }
        ]
    },
    {
        id: 8,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 9,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [0, 2] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 'g2'] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 1] }
        ]
    },
    {
        id: 10,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'g4', col: 2, row: 2, inputs: ['g2', 1] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g4'] }
        ]
    },
    {
        id: 11,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 12,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 13,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'g3', col: 3, row: 1, inputs: ['g2', 0] },
            { id: 'gFinal', col: 4, row: 1, inputs: ['g3', 'g2'] }
        ]
    },
    {
        id: 14,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 2] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 3] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 3] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g2'] }
        ]
    },
    {
        id: 15,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [0, 2] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g2'] }
        ]
    },
    {
        id: 16,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 17,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 0] }
        ]
    },
    {
        id: 18,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 0] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 19,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [0, 2] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 20,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'g3', col: 3, row: 1, inputs: ['g2', 3] },
            { id: 'gFinal', col: 4, row: 1, inputs: ['g3', 'g3'] }
        ]
    },
    {
        id: 21,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 3] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g2'] }
        ]
    },
    {
        id: 22,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 'g1'] },
            { id: 'gFinal', col: 2, row: 2, inputs: ['g2', 'g2'] }
        ]
    },
    {
        id: 23,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 'g2'] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 0] }
        ]
    },
    {
        id: 24,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 0] }
        ]
    },
    {
        id: 25,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 1] }
        ]
    },
    {
        id: 26,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 'g2'] },
            { id: 'gFinal', col: 2, row: 2, inputs: [3, 'g2'] }
        ]
    },
    {
        id: 27,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 'g1'] }
        ]
    },
    {
        id: 28,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 2] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 3] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 29,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g2', 'g1'] }
        ]
    },
    {
        id: 30,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'g3', col: 3, row: 1, inputs: ['g2', 3] },
            { id: 'gFinal', col: 4, row: 1, inputs: ['g3', 0] }
        ]
    },
    {
        id: 31,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 'g1'] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g2'] }
        ]
    },
    {
        id: 32,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 2] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 1] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 0] }
        ]
    },
    {
        id: 33,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [0, 1] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 34,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 3] }
        ]
    },
    {
        id: 35,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 36,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 'g1'] }
        ]
    },
    {
        id: 37,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'g3', col: 3, row: 1, inputs: ['g2', 3] },
            { id: 'gFinal', col: 4, row: 1, inputs: ['g3', 0] }
        ]
    },
    {
        id: 38,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 0] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 1] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 2] }
        ]
    },
    {
        id: 39,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [2, 3] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 40,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 2] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 3] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 1] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g2'] }
        ]
    },
    {
        id: 41,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 0] }
        ]
    },
    {
        id: 42,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'g3', col: 3, row: 1, inputs: ['g2', 3] },
            { id: 'gFinal', col: 4, row: 1, inputs: ['g3', 0] }
        ]
    },
    {
        id: 43,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 2] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 3] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 44,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 1, row: 2, inputs: [0, 2] },
            { id: 'gFinal', col: 2, row: 1, inputs: ['g1', 'g2'] }
        ]
    },
    {
        id: 45,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 3] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 'g2'] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 0] }
        ]
    },
    {
        id: 46,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 3] }
        ]
    },
    {
        id: 47,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 2] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 3] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 1] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g2'] }
        ]
    },
    {
        id: 48,
        inputs: 3,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: ['g1', 2] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g2', 'g2'] }
        ]
    },
    {
        id: 49,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 1] },
            { id: 'g2', col: 2, row: 1, inputs: [2, 3] },
            { id: 'g3', col: 3, row: 1, inputs: ['g1', 'g2'] },
            { id: 'gFinal', col: 4, row: 1, inputs: ['g3', 0] }
        ]
    },
    {
        id: 50,
        inputs: 4,
        layout: [
            { id: 'g1', col: 1, row: 1, inputs: [0, 3] },
            { id: 'g2', col: 1, row: 2, inputs: [1, 2] },
            { id: 'g3', col: 2, row: 1, inputs: ['g1', 'g2'] },
            { id: 'g4', col: 2, row: 2, inputs: ['g2', 3] },
            { id: 'gFinal', col: 3, row: 1, inputs: ['g3', 'g4'] }
        ]
    }
];
