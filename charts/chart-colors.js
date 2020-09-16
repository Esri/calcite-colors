import { reverse } from '@dashboard/utils/array';

export var ColorPalette = [
  // Line 0: 0-12
  '#ffffff',
  '#858585',
  '#ffbebe',
  '#ffebbe',
  '#ffebaf',
  '#ffffbe',
  '#e9ffbe',
  '#d3ffbe',
  '#beffe8',
  '#bee8ff',
  '#bed2ff',
  '#e8beff',
  '#ffbee8',
  // Line 1: 13-25
  '#ebebeb',
  '#707070',
  '#ff7f7f',
  '#ffa77f',
  '#ffd37f',
  '#ffff73',
  '#d1ff73',
  '#a3ff73',
  '#73ffdf',
  '#73dfff',
  '#73b2ff',
  '#df73ff',
  '#ff73df',
  // Line 2: 26-38
  '#d6d6d6',
  '#5c5c5c',
  '#ff0000',
  '#ff5500',
  '#ffaa00',
  '#ffff00',
  '#aaff00',
  '#55ff00',
  '#00ffc5',
  '#00c5ff',
  '#0070ff',
  '#c500ff',
  '#ff00c5',
  // Line 3: 39-51
  '#c2c2c2',
  '#474747',
  '#e60000',
  '#e64c00',
  '#e69800',
  '#e6e600',
  '#98e600',
  '#4ce600',
  '#00e6a9',
  '#00a9e6',
  '#005ce6',
  '#a900e6',
  '#e600a9',
  // Line 4: 52-64
  '#adadad',
  '#242424',
  '#a80000',
  '#a83800',
  '#a87000',
  '#a8a800',
  '#70a800',
  '#38a800',
  '#00a884',
  '#0084a8',
  '#004da8',
  '#8400a8',
  '#a80084',
  // Line 5: 65-77
  '#999999',
  '#1a1a1a',
  '#730000',
  '#732600',
  '#734c00',
  '#737300',
  '#4c7300',
  '#267300',
  '#00734c',
  '#004c73',
  '#002673',
  '#4c0073',
  '#73004c'
];

const DefaultColors = [...ColorPalette.slice(30, 39), ...reverse(ColorPalette.slice(28, 30))];

// means reset and use inherited value for amchart color and css variables
export const ResetColor = '';

export const OtherColor = ColorPalette[26];

export const ColorSets = [
  { name: 'default', colors: DefaultColors },
  {
    name: 'cat-dark',
    colors: [
      '#ed5151',
      '#149ece',
      '#a7c636',
      '#9e559c',
      '#fc921f',
      '#ffde3e',
      '#f789d8',
      '#b7814a',
      '#3caf99',
      '#6b6bd6',
      '#b54779',
      '#7f7f7f'
    ]
  },
  {
    name: 'tropical-bliss',
    colors: [
      '#fce138',
      '#ff9399',
      '#fcd27e',
      '#f1983c',
      '#a553b7',
      '#b1a9d0',
      '#6ecffc',
      '#4c81cd',
      '#fc6f84',
      '#fc3e5a',
      '#6af689',
      '#48885c'
    ]
  },
  {
    name: 'desert-blooms',
    colors: [
      '#102432',
      '#144d59',
      '#ffc730',
      '#ed9310',
      '#a64f1b',
      '#661510',
      '#d9351a',
      '#b31515',
      '#4a0932',
      '#8c213f',
      '#18382e',
      '#2c6954'
    ]
  },
  {
    name: 'under-the-sea',
    colors: [
      '#bf9727',
      '#607100',
      '#00734c',
      '#704489',
      '#01acca',
      '#024e76',
      '#f09100',
      '#ea311f',
      '#c6004b',
      '#7570b3',
      '#666666',
      '#333333'
    ]
  },
  {
    name: 'vibrant-rainbow',
    colors: [
      '#fffb00',
      '#f5cb11',
      '#9fd40c',
      '#46e39c',
      '#32b8a6',
      '#7ff2fa',
      '#ad00f2',
      '#c461eb',
      '#eb7200',
      '#e8a784',
      '#bf2e2e',
      '#6c7000'
    ]
  },
  {
    name: 'ocean-bay',
    colors: [
      '#191921',
      '#11495c',
      '#78b1c2',
      '#454f4b',
      '#8f8f82',
      '#9be0c0',
      '#87b051',
      '#f7ec88',
      '#ebdcc1',
      '#dbb658',
      '#c43541',
      '#75351e'
    ]
  },
  {
    name: 'prairie-summer',
    colors: [
      '#332424',
      '#751555',
      '#d47013',
      '#d68989',
      '#211173',
      '#82aad6',
      '#7bfaeb',
      '#6ec9a8',
      '#6b6408',
      '#eada40',
      '#ccc54a',
      '#1fc235'
    ]
  },
  {
    name: 'pastel-chalk',
    colors: [
      '#fffd99',
      '#f5e6a4',
      '#c1d48c',
      '#b8e3d0',
      '#a0b8b5',
      '#cbf7fa',
      '#d791f2',
      '#dfc1eb',
      '#f2b983',
      '#e8c4b2',
      '#bf8e8e',
      '#94995c'
    ]
  },
  {
    name: 'seq-yellow-orange-red-bright',
    colors: [
      '#910000',
      '#b1260b',
      '#c0370f',
      '#e05919',
      '#ef6a1d',
      '#ff7b22',
      '#ffa143',
      '#ffb454',
      '#ffda74',
      '#ffed85'
    ]
  },
  {
    name: 'seq-reds-bright',
    colors: [
      '#57453b',
      '#7b4238',
      '#9f4036',
      '#c23d33',
      '#d7483c',
      '#ec5244',
      '#f3696c',
      '#f9816c',
      '#ffc4ae',
      '#fff0dc'
    ]
  },
  {
    name: 'seq-purples-bright',
    colors: [
      '#4e465c',
      '#5a4a78',
      '#695291',
      '#775baa',
      '#8663c3',
      '#946bdc',
      '#aa89e8',
      '#c1a6f3',
      '#d7c4ff',
      '#e6e1ff'
    ]
  },
  {
    name: 'seq-blues-bright',
    colors: [
      '#404d54',
      '#435c6c',
      '#48799d',
      '#4b88b6',
      '#4d96ce',
      '#50a5e7',
      '#74bbed',
      '#98d0f3',
      '#bce6f9',
      '#e6faff'
    ]
  },
  {
    name: 'seq-greens-bright',
    colors: [
      '#39544c',
      '#386757',
      '#368165',
      '#359b73',
      '#33b581',
      '#4bc392',
      '#64d2a2',
      '#7ce0b3',
      '#cbf6d9',
      '#f4ffea'
    ]
  },
  {
    name: 'seq-browns-bright',
    colors: [
      '#524834',
      '#715b38',
      '#8f6e3c',
      '#ae8140',
      '#cc9444',
      '#eba748',
      '#eeb664',
      '#f0c47f',
      '#f9e0b7',
      '#fff8eb'
    ]
  }
];

export function colorFromColorSet(index, colorSet = ColorSets[0]) {
  return colorSet.colors[index % colorSet.colors.length];
}