export default function ticTacToe (mode = 'production') {
  
  const newPlay = () => ({
    p1:'',
    p2:'',
    p3:'',
    p4:'',
    p5:'',
    p6:'',
    p7:'',
    p8:'',
    p9:''
  })

  const set = (position, symbol) => {
    table[position] = (symbol.toLowerCase() !== 'x' && symbol.toLowerCase() !== 'o') ? '' : symbol.toLowerCase();
  }

  const verifyDraw = () => {
    return (table.p1.length > 0 && table.p2.length > 0 && table.p3.length> 0 && table.p4.length > 0 && table.p5.length > 0 && table.p6.length > 0 && table.p7.length > 0 && table.p8.length > 0 && table.p9.length > 0)
  }

  const isFinish = () => {
    const ruleHTop = ((table.p1.length > 0 && table.p2.length > 0 && table.p3.length > 0) && (table.p1 === table.p2 && table.p2 === table.p3 && table.p3 === table.p1));
    const ruleHMiddle = ((table.p4.length > 0 && table.p5.length > 0 && table.p6.length > 0) && (table.p4 === table.p5 && table.p5 === table.p6 && table.p6 === table.p4));
    const ruleHBottom = ((table.p7.length > 0 && table.p8.length > 0 && table.p9.length > 0) && (table.p7 === table.p8 && table.p8 === table.p9 && table.p9 === table.p7));
    const ruleVLeft = ((table.p1.length > 0 && table.p4.length > 0 && table.p7.length > 0) && (table.p1 === table.p4 && table.p4 === table.p7 && table.p7 === table.p1));
    const ruleVMiddle = ((table.p2.length > 0 && table.p5.length > 0 && table.p8.length > 0) && (table.p2 === table.p5 && table.p5 === table.p8 && table.p8 === table.p2));
    const ruleVRight = ((table.p3.length > 0 && table.p6.length > 0 && table.p9.length > 0) && (table.p3 === table.p6 && table.p6 === table.p9 && table.p9 === table.p3));
    const ruleDLeftRight = ((table.p1.length > 0 && table.p5.length > 0 && table.p9.length > 0) && (table.p1 === table.p5 && table.p5 === table.p9 && table.p9 === table.p1));
    const ruleDRightLeft = ((table.p3.length > 0 && table.p5.length > 0 && table.p7.length > 0) && (table.p3 === table.p5 && table.p5 === table.p7 && table.p7 === table.p3));

    const finishMoves = {
      [ruleHTop] : () => ({status: true, rule: 'Horizontal Top'}),
      [ruleHMiddle]: () => ({status: true, rule: 'Horizontal Middle'}),
      [ruleHBottom]: () => ({status: true, rule: 'Horizontal Bottom'}),
      [ruleVLeft]: () => ({status: true, rule: 'Vertical Left'}),
      [ruleVMiddle]: () => ({status: true, rule: 'Vertical Middle'}),
      [ruleVRight]: () => ({status: true, rule: 'Vertical Right'}),
      [ruleDLeftRight]: () => ({status: true, rule: 'Diagonal Left Right'}),
      [ruleDRightLeft]: () => ({status: true, rule: 'Diagonal Right Left'})
    }

    if (finishMoves['true']) {
      return finishMoves['true']();
    } 
    
    return verifyDraw() ? {status: true, rule: 'Draw'} : false;
  }

  const move = (symbol, position = '') => {
    if (table.hasOwnProperty(position) && table[position].length === 0) set(position, symbol);
  }

  const getPositionValue = (position) => {
    return table[position];
  }

  const getTable = () => table;

  const getTableLength = () => {
    return Object.keys(table).length;
  }

  let table = newPlay();
 
  return (mode === 'production') 
    ? {isFinish, move}
    : {isFinish, getPositionValue, getTable, getTableLength, move}
}