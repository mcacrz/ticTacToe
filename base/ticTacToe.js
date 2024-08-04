export default function () {
  
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

  const set = (position = '', symbol) => {
    table[position] = (symbol.toLowerCase() !== 'x' && symbol.toLowerCase() !== 'o') ? '' : symbol.toLowerCase();
  }

  const verifyDraw = (table) => {
    return (table.p1.length > 0 && table.p2.length > 0 && table.p3.length> 0 && table.p4.length > 0 && table.p5.length > 0 && table.p6.length > 0 && table.p7.length > 0 && table.p8.length > 0 && table.p9.length > 0)
  }

  const isFinish = (table) => {
    const ruleHTop = () => ((table.p1.length > 0 && table.p2.length > 0 && table.p3.length > 0) && (table.p1 === table.p2 && table.p2 === table.p3 && table.p3 === table.p1));
    const ruleHMiddle = () => ((table.p4.length > 0 && table.p5.length > 0 && table.p6.length > 0) && (table.p4 === table.p5 && table.p5 === table.p6 && table.p6 === table.p4));
    const ruleHBottom = () => ((table.p7.length > 0 && table.p8.length > 0 && table.p9.length > 0) && (table.p7 === table.p8 && table.p8 === table.p9 && table.p9 === table.p7));
    const ruleVLeft = () => ((table.p1.length > 0 && table.p4.length > 0 && table.p7.length > 0) && (table.p1 === table.p4 && table.p4 === table.p7 && table.p7 === table.p1));
    const ruleVMiddle = () => ((table.p2.length > 0 && table.p5.length > 0 && table.p8.length > 0) && (table.p2 === table.p5 && table.p5 === table.p8 && table.p8 === table.p2));
    const ruleVRight = () => ((table.p3.length > 0 && table.p6.length > 0 && table.p9.length > 0) && (table.p3 === table.p6 && table.p6 === table.p9 && table.p9 === table.p3));
    const ruleDLeftRight = () => ((table.p1.length > 0 && table.p5.length > 0 && table.p9.length > 0) && (table.p1 === table.p5 && table.p5 === table.p9 && table.p9 === table.p1));
    const ruleDRightLeft = () => ((table.p3.length > 0 && table.p5.length > 0 && table.p7.length > 0) && (table.p3 === table.p5 && table.p5 === table.p7 && table.p7 === table.p3));

    const finishMoves = {
      [ruleHTop()] : () => ({status: true, rule: 'Horizontal Top'}),
      [ruleHMiddle()]: () => ({status: true, rule: 'Horizontal Middle'}),
      [ruleHBottom()]: () => ({status: true, rule: 'Horizontal Bottom'}),
      [ruleVLeft()]: () => ({status: true, rule: 'Vertical Left'}),
      [ruleVMiddle()]: () => ({status: true, rule: 'Vertical Middle'}),
      [ruleVRight()]: () => ({status: true, rule: 'Vertical Right'}),
      [ruleDLeftRight()]: () => ({status: true, rule: 'Diagonal Left Right'}),
      [ruleDRightLeft()]: () => ({status: true, rule: 'Diagonal Right Left'})
    }

    if (finishMoves['true']) {
      return finishMoves['true']();
    } 
    
    return verifyDraw(table) ? {status: true, rule: 'Draw'} : false;
  }

  const move = (table, position, symbol) => {
    if (table) {
      const plays = {
        'p1' : () => set('p1', symbol),
        'p2' : () => set('p2', symbol),
        'p3' : () => set('p3', symbol),
        'p4' : () => set('p4', symbol),
        'p5' : () => set('p5', symbol),
        'p6' : () => set('p6', symbol),
        'p7' : () => set('p7', symbol),
        'p8' : () => set('p8', symbol),
        'p9' : () => set('p9', symbol),
      };

      if (table[position].length === 0) table = plays[position](table, symbol);

      return table;
    }
    
    return false;
  }

  const getPositionValue = (position) => {
    return table[position];
  }

  const getTableLength = () => {
    return Object.keys(table).length;
  }

  let table = newPlay();
 
  return { newPlay, getPositionValue, getTableLength, move, set, isFinish, verifyDraw }
}