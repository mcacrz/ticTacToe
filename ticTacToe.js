export default function ticTacToe (mode = 'production') {

  /**
   * AUXILIARY TEST FUNCTIONS
   */

  /**
   * Return position value
   * @param {string} position Position from board object variable 
   * @returns string
   */
  const getPositionValue = (position) => {
    return board[position];
  }

  /**
   * Return board variable
   * @returns {object}
   */
  const getboard = () => board;

  const getboardLength = () => {
    return Object.keys(board).length;
  }

  /**
   * PROPERTIES
   */
  const board = {
    p1:'',
    p2:'',
    p3:'',
    p4:'',
    p5:'',
    p6:'',
    p7:'',
    p8:'',
    p9:''
  }

  /**
   * PRIVATE FUNCTIONS
   */
  const set = (position, symbol) => {
    board[position] = (symbol.toLowerCase() !== 'x' && symbol.toLowerCase() !== 'o') ? '' : symbol.toLowerCase();
  }

  const draw = () => {
    return (board.p1.length > 0 && board.p2.length > 0 && board.p3.length> 0 && board.p4.length > 0 && board.p5.length > 0 && board.p6.length > 0 && board.p7.length > 0 && board.p8.length > 0 && board.p9.length > 0)
  }

  const win = () => {
    const ruleHTop = ((board.p1.length > 0 && board.p2.length > 0 && board.p3.length > 0) && (board.p1 === board.p2 && board.p2 === board.p3 && board.p3 === board.p1));
    const ruleHMiddle = ((board.p4.length > 0 && board.p5.length > 0 && board.p6.length > 0) && (board.p4 === board.p5 && board.p5 === board.p6 && board.p6 === board.p4));
    const ruleHBottom = ((board.p7.length > 0 && board.p8.length > 0 && board.p9.length > 0) && (board.p7 === board.p8 && board.p8 === board.p9 && board.p9 === board.p7));
    const ruleVLeft = ((board.p1.length > 0 && board.p4.length > 0 && board.p7.length > 0) && (board.p1 === board.p4 && board.p4 === board.p7 && board.p7 === board.p1));
    const ruleVMiddle = ((board.p2.length > 0 && board.p5.length > 0 && board.p8.length > 0) && (board.p2 === board.p5 && board.p5 === board.p8 && board.p8 === board.p2));
    const ruleVRight = ((board.p3.length > 0 && board.p6.length > 0 && board.p9.length > 0) && (board.p3 === board.p6 && board.p6 === board.p9 && board.p9 === board.p3));
    const ruleDLeftRight = ((board.p1.length > 0 && board.p5.length > 0 && board.p9.length > 0) && (board.p1 === board.p5 && board.p5 === board.p9 && board.p9 === board.p1));
    const ruleDRightLeft = ((board.p3.length > 0 && board.p5.length > 0 && board.p7.length > 0) && (board.p3 === board.p5 && board.p5 === board.p7 && board.p7 === board.p3));

    const WinnerMoves = {
      [ruleHTop] : () => ({status: true, rule: 'Horizontal Top'}),
      [ruleHMiddle]: () => ({status: true, rule: 'Horizontal Middle'}),
      [ruleHBottom]: () => ({status: true, rule: 'Horizontal Bottom'}),
      [ruleVLeft]: () => ({status: true, rule: 'Vertical Left'}),
      [ruleVMiddle]: () => ({status: true, rule: 'Vertical Middle'}),
      [ruleVRight]: () => ({status: true, rule: 'Vertical Right'}),
      [ruleDLeftRight]: () => ({status: true, rule: 'Diagonal Left Right'}),
      [ruleDRightLeft]: () => ({status: true, rule: 'Diagonal Right Left'})
    }

    if (WinnerMoves.hasOwnProperty('true')) {
      return finishMoves['true']();
    } 

    return {status:false};
  }

  /**
   * PUBLIC FUNCTIONS
   */
  const isFinish = () => {

    if(win().status) return win();
    
    if(draw()) return {status: true, rule: 'Draw'} 
    
    return false;
  }

  const move = (symbol, position = '') => {
    if (board.hasOwnProperty(position) && board[position].length === 0) set(position, symbol);
  }

  return (mode === 'production') 
    ? {isFinish, move}
    : {isFinish, getPositionValue, getboard, getboardLength, move}
}