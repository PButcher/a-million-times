// numbers.js
// ---
// Hand values range from 0 to 360 degrees
// Each face has 2 hands so each face needs 2 values
// Numbers are represented on a 4 by 6 grid

// Hand angle permutations for number map
export const handPositions = [
  // 0 - Blank position: ~7:37
  [225, 225],
  // 1 - Top-left corner: ~3:30
  [90, 180],
  // 2 - Top-right corner: ~9:30
  [180, 270],
  // 3 - Bottom-right corner: ~12:45
  [0, 270],
  // 4 - Bottom-left corner: ~12:15
  [0, 90],
  // 5 - Vertical line: 6:00
  [0, 180],
  // 6 - Horizontal line: ~3:45
  [90, 270]
];

let h = handPositions;

// A number described by a 4 x 6 grid of clock faces
export const numbers = [
  {
    /*
      + - - +  1 6 6 2
      | + + |  5 1 2 5
      | | | |  5 5 5 5
      | | | |  5 5 5 5
      | + + |  5 4 3 5
      + - - +  4 6 6 3
    */
    name: 'Zero',
    value: 0,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[6], h[2],
      h[5], h[1], h[2], h[5],
      h[5], h[5], h[5], h[5],
      h[5], h[5], h[5], h[5],
      h[5], h[4], h[3], h[5],
      h[4], h[6], h[6], h[3]
    ]
  },
  {
    /*
      + - +    1 6 2 0
      + + |    4 2 5 0
        | |    0 5 5 0
        | |    0 5 5 0
      + + + +  1 3 4 2
      + - - +  4 6 6 3
    */
    name: 'One',
    value: 1,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[2], h[0],
      h[4], h[2], h[5], h[0],
      h[0], h[5], h[5], h[0],
      h[0], h[5], h[5], h[0],
      h[1], h[3], h[4], h[2],
      h[4], h[6], h[6], h[3]
    ]
  },
  {
    /*
      + - - +  1 6 6 2
      + - + |  4 6 2 5
      + - + |  1 6 3 5
      | + - +  5 1 6 3
      | + - +  5 4 6 2
      + - - +  4 6 6 3
    */
    name: 'Two',
    value: 2,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[6], h[2],
      h[4], h[6], h[2], h[5], 
      h[1], h[6], h[3], h[5], 
      h[5], h[1], h[6], h[3], 
      h[5], h[4], h[6], h[2], 
      h[4], h[6], h[6], h[3]
    ]
  },
  {
    /*
      + - - +  1 6 6 2
      + - + |  4 6 2 5
      + - + |  1 6 3 5
      + - + |  4 6 2 5
      + - + |  1 6 3 5
      + - - +  4 6 6 3
    */
    name: 'Three',
    value: 3,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[6], h[2],
      h[4], h[6], h[2], h[5],
      h[1], h[6], h[3], h[5],
      h[4], h[6], h[2], h[5],
      h[1], h[6], h[3], h[5],
      h[4], h[6], h[6], h[3]
    ]
  },
  {
    /*
      + + + +   1 2 1 2
      | | | |   5 5 5 5 
      | + + |   5 4 3 5
      + - + |   4 6 2 5
          | |   0 0 5 5
          + +   0 0 4 3
    */
    name: 'Four',
    value: 4,
    // prettier-ignore
    handMap: [
      h[1], h[2], h[1], h[2],
      h[5], h[5], h[5], h[5],
      h[5], h[4], h[3], h[5],
      h[4], h[6], h[2], h[5],
      h[0], h[0], h[5], h[5],
      h[0], h[0], h[4], h[3]
    ]
  },
  {
    /*
      + - - +  1 6 6 2
      | + - +  5 1 6 3
      | + - +  5 4 6 2
      + - + |  4 6 2 5
      + - + |  1 5 3 5
      + - - +  4 6 6 3
    */
    name: 'Five',
    value: 5,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[6], h[2],
      h[5], h[1], h[6], h[3],
      h[5], h[4], h[6], h[2],
      h[4], h[6], h[2], h[5],
      h[1], h[6], h[3], h[5],
      h[4], h[6], h[6], h[3]
    ]
  },
  {
    /*
      + - - +  1 6 6 2
      | + - +  5 1 6 3
      | + - +  5 4 6 2
      | + + |  5 1 2 5
      | + + |  5 4 3 5
      + - - +  4 6 6 3
    */
    name: 'Six',
    value: 6,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[6], h[2],
      h[5], h[1], h[6], h[3],
      h[5], h[4], h[6], h[2],
      h[5], h[1], h[2], h[5],
      h[5], h[4], h[3], h[5],
      h[4], h[6], h[6], h[3]
    ]
  },
  {
    /*
      + - - +  1 6 6 2
      + - + |  4 6 2 5
          | |  0 0 5 5
          | |  0 0 5 5
          | |  0 0 5 5
          + +  0 0 4 3
    */
    name: 'Seven',
    value: 7,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[6], h[2],
      h[4], h[6], h[2], h[5],
      h[0], h[0], h[5], h[5],
      h[0], h[0], h[5], h[5],
      h[0], h[0], h[5], h[5],
      h[0], h[0], h[4], h[3]
    ]
  },
  {
    /*
      + - - +  1 6 6 2
      | + + |  5 1 2 5
      | + + |  5 4 3 5
      | + + |  5 1 2 5
      | + + |  5 4 3 5
      + - - +  4 6 6 3
    */
    name: 'Eight',
    value: 8,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[6], h[2],
      h[5], h[1], h[2], h[5],
      h[5], h[4], h[3], h[5],
      h[5], h[1], h[2], h[5],
      h[5], h[4], h[3], h[5],
      h[4], h[6], h[6], h[3]
    ]
  },
  {
    /*
      + - - +  1 6 6 2
      | + + |  5 1 2 5
      | + + |  5 4 3 5
      + - + |  4 6 2 5
      + - + |  1 6 3 5
      + - - +  4 6 6 3
    */
    name: 'Nine',
    value: 9,
    // prettier-ignore
    handMap: [
      h[1], h[6], h[6], h[2],
      h[5], h[1], h[2], h[5],
      h[5], h[4], h[3], h[5],
      h[4], h[6], h[2], h[5],
      h[1], h[6], h[3], h[5],
      h[4], h[6], h[6], h[3]
    ]
  }
];

// Delimiter
// prettier-ignore
export const delimiter = [
  h[0], h[0],
  h[1], h[2],
  h[4], h[3],
  h[1], h[2],
  h[4], h[3],
  h[0], h[0]
];
