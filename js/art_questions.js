const artQuestions = [
    {
        id: 1,
        title: 'Sunset Window',
        rows: 6,
        cols: 6,
        palette: ['#FFFFFF', '#FDE2CF', '#FFB4A2', '#E5989B', '#B5838D', '#6D6875'],
        pattern: [
            [0, 0, 1, 1, 0, 0],
            [0, 1, 2, 2, 1, 0],
            [1, 2, 3, 3, 2, 1],
            [1, 2, 3, 3, 2, 1],
            [0, 1, 2, 2, 1, 0],
            [0, 0, 1, 1, 0, 0],
        ]
    },
    {
        id: 2,
        title: 'Green Leaf',
        rows: 5,
        cols: 5,
        palette: ['#FFFFFF', '#B7D7A8', '#6AA84F', '#38761D', '#274E13'],
        pattern: [
            [0, 0, 2, 0, 0],
            [0, 2, 3, 2, 0],
            [2, 3, 4, 3, 2],
            [0, 2, 3, 2, 0],
            [0, 0, 2, 0, 0],
        ]
    },
    {
        id: 3,
        title: 'Pixel Heart',
        rows: 7,
        cols: 7,
        palette: ['#FFFFFF', '#FFB7B2', '#FF6961', '#C3555A', '#F8E7DE'],
        pattern: [
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 2, 2, 2, 1, 0],
            [1, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 1],
            [0, 1, 2, 2, 2, 1, 0],
            [0, 0, 1, 2, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
        ]
    },
    {
        id: 4,
        title: 'Blue Water Drop',
        rows: 6,
        cols: 6,
        palette: ['#FFFFFF', '#D7EAF9', '#8DB9F5', '#3A7BD5', '#173F67'],
        pattern: [
            [0, 0, 1, 1, 0, 0],
            [0, 1, 2, 2, 1, 0],
            [1, 2, 3, 3, 2, 1],
            [1, 2, 3, 3, 2, 1],
            [0, 1, 2, 2, 1, 0],
            [0, 0, 1, 1, 0, 0],
        ]
    },
    {
        id: 5,
        title: 'Candy Peg',
        rows: 5,
        cols: 5,
        palette: ['#FFFFFF', '#FFEB3B', '#FFC107', '#FF5722', '#F44336'],
        pattern: [
            [0, 0, 1, 0, 0],
            [0, 1, 2, 1, 0],
            [1, 2, 3, 2, 1],
            [0, 1, 2, 1, 0],
            [0, 0, 1, 0, 0],
        ]
    }
];

function getRandomArtQuestion() {
    const item = artQuestions[Math.floor(Math.random() * artQuestions.length)];
    const copy = JSON.parse(JSON.stringify(item));
    return copy;
}

function getColorFromPalette(code, palette) {
    if (code === null || code === undefined) return '#FFFFFF';
    if (typeof code === 'number') {
        if (code >= 0 && code < palette.length) {
            return palette[code];
        }
    }
    return code;
}
