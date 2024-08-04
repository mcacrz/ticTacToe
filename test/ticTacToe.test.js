import { ticTacToe } from '../base'
describe('suit test for tic-tac-toe game', () => {
  
  test('should create an object with 9 positions', () => {
    const game = ticTacToe();
    expect(game.getTableLength()).toBe(9);
  });

  test('should set p1 position with "x" symbol' , () => {
    const game = ticTacToe();
    game.set('p1','x');

    expect(game.getPositionValue('p1')).toBe('x');
  })

  test('should set p1 position with "o" symbol' , () => {
    const game = ticTacToe();
    game.set('p1','o');

    expect(game.getPositionValue('p1')).toBe('o');
  })

  test('should mantain p1 position empty if symbol is diferent of "x" or "o"', () => {
    const game = ticTacToe();
    game.set('p1','y');

    expect(game.getPositionValue('p1')).toBe('');
  })

  test('should set p2 position with "x" symbol' , () => {
    const game = ticTacToe();
    game.set('p2','x');

    expect(game.getPositionValue('p2')).toBe('x');
  })

  test('should set p2 position with "o" symbol' , () => {
    const game = ticTacToe();
    game.set('p2','o');

    expect(game.getPositionValue('p2')).toBe('o');
  })

  test('should mantain p2 position empty if symbol is diferent of "x" or "o"', () => {
    const game = ticTacToe();
    game.set('p2','y');

    expect(game.getPositionValue('p2')).toBe('');
  })

  test('should set p3 position with "x" symbol' , () => {
    const game = ticTacToe();
    game.set('p3','x');

    expect(game.getPositionValue('p3')).toBe('x');
  })

  test('should set p3 position with "o" symbol' , () => {
    const game = ticTacToe();
    game.set('p3','o');

    expect(game.getPositionValue('p3')).toBe('o');
  })

  test('should mantain p3 position empty if symbol is diferent of "x" or "o"', () => {
    const game = ticTacToe();
    game.set('p3','y');

    expect(game.getPositionValue('p3')).toBe('');
  })

  test('should set p4 position with "x" symbol' , () => {
    const game = ticTacToe();
    game.set('p4','x');

    expect(game.getPositionValue('p4')).toBe('x');
  })

  test('should set p4 position with "o" symbol' , () => {
    const game = ticTacToe();
    game.set('p4','o');

    expect(game.getPositionValue('p4')).toBe('o');
  })

  test('should mantain p4 position empty if symbol is diferent of "x" or "o"', () => {
    const game = ticTacToe();
    game.set('p4','y');

    expect(game.getPositionValue('p4')).toBe('');
  })

  test('should set p5 position with "x" symbol' , () => {
    const game = ticTacToe();
    game.set('p5','x');

    expect(game.getPositionValue('p5')).toBe('x');
  })

  test('should set p5 position with "o" symbol' , () => {
    const game = ticTacToe();
    game.set('p5','o');

    expect(game.getPositionValue('p5')).toBe('o');
  })

  test('should mantain p5 position empty if symbol is diferent of "x" or "o"', () => {
    const game = ticTacToe();
    game.set('p5','y');

    expect(game.getPositionValue('p5')).toBe('');
  })

  test('should set p6 position with "x" symbol' , () => {
    let table = game.newPlay();
    table = game.setP6(table,'x');

    expect(table.p6).toBe('x');
  })

  test('should set p6 position with "o" symbol' , () => {
    let table = game.newPlay();
    table = game.setP6(table,'x');

    expect(table.p6).toBe('x');
  })

  test('should mantain p6 position empty if symbol is diferent of "x" or "o"', () => {
    let table = game.newPlay();
    table = game.setP6(table,'y');

    expect(table.p6).toBe('');
  })

  test('should set p7 position with "x" symbol' , () => {
    let table = game.newPlay();
    table = game.setP7(table,'x');

    expect(table.p7).toBe('x');
  })

  test('should set p7 position with "o" symbol' , () => {
    let table = game.newPlay();
    table = game.setP7(table,'x');

    expect(table.p7).toBe('x');
  })

  test('should mantain p7 position empty if symbol is diferent of "x" or "o"', () => {
    let table = game.newPlay();
    table = game.setP7(table,'y');

    expect(table.p7).toBe('');
  })

  test('should set p8 position with "x" symbol' , () => {
    let table = game.newPlay();
    table = game.setP8(table,'x');

    expect(table.p8).toBe('x');
  })

  test('should set p8 position with "o" symbol' , () => {
    let table = game.newPlay();
    table = game.setP8(table,'x');

    expect(table.p8).toBe('x');
  })

  test('should mantain p8 position empty if symbol is diferent of "x" or "o"', () => {
    let table = game.newPlay();
    table = game.setP8(table,'y');

    expect(table.p8).toBe('');
  })
  
  test('should set p9 position with "x" symbol' , () => {
    let table = game.newPlay();
    table = game.setP9(table,'x');

    expect(table.p9).toBe('x');
  })

  test('should set p9 position with "o" symbol' , () => {
    let table = game.newPlay();
    table = game.setP9(table,'x');

    expect(table.p9).toBe('x');
  })

  test('should mantain p9 position empty if symbol is diferent of "x" or "o"', () => {
    let table = game.newPlay();
    table = game.setP9(table,'y');

    expect(table.p9).toBe('');
  })

  test('should return status true game if rule Horizontal Top is true', () => {
    let table = game.newPlay();
    table = game.setP1(table, 'x');
    table = game.setP2(table, 'x');
    table = game.setP3(table, 'x');
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Horizontal Top'});
  })

  test('should return status true if rule Horizontal Middle is true', () => {
    let table = game.newPlay();
    table = game.setP4(table, 'x');
    table = game.setP5(table, 'x');
    table = game.setP6(table, 'x');
    
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Horizontal Middle'});
  })

  test('should return status true if rule Horizontal Bottom is true', () => {
    let table = game.newPlay();
    table = game.setP7(table, 'x');
    table = game.setP8(table, 'x');
    table = game.setP9(table, 'x');
    
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Horizontal Bottom'});
  })

  test('should return status true if rule Vertical Left is true', () => {
    let table = game.newPlay();
    table = game.setP1(table, 'x');
    table = game.setP4(table, 'x');
    table = game.setP7(table, 'x');
    
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Vertical Left'});
  })

  test('should return status true if rule Vertical Middle is true', () => {
    let table = game.newPlay();
    table = game.setP2(table, 'x');
    table = game.setP5(table, 'x');
    table = game.setP8(table, 'x');
    
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Vertical Middle'});
  })

  test('should return status true if rule Vertical Right is true', () => {
    let table = game.newPlay();
    table = game.setP3(table, 'x');
    table = game.setP6(table, 'x');
    table = game.setP9(table, 'x');
    
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Vertical Right'});
  })

  test('should return status true if rule Diagonal Left Right is true', () => {
    let table = game.newPlay();
    table = game.setP1(table, 'x');
    table = game.setP5(table, 'x');
    table = game.setP9(table, 'x');
    
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Diagonal Left Right'});
  })

  test('should return status true if rule Diagonal Right Left is true', () => {
    let table = game.newPlay();
    table = game.setP3(table, 'x');
    table = game.setP5(table, 'x');
    table = game.setP7(table, 'x');
    
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Diagonal Right Left'});
  })

  test('should return false if game is no draw', () => {
    let table = game.newPlay();
    table = game.setP1(table, 'x');
    table = game.setP2(table, 'o');
    table = game.setP3(table, 'x');
    table = game.setP4(table, 'o');
    table = game.setP5(table, 'x');
    table = game.setP6(table, 'o');
    table = game.setP7(table, 'x');
    table = game.setP8(table, 'o');
    table = game.setP9(table, 'x');
    
    expect(game.verifyDraw(table)).toBeTruthy();
  });

  test('should return true if game is draw', () => {
    let table = game.newPlay();
    table = game.setP1(table, 'x');
    
    expect(game.verifyDraw(table)).toBeFalsy();
  });


  test('should return a finish game with a draw', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p2', 'o');
    table = game.move(table, 'p3', 'x');
    table = game.move(table, 'p4', 'o');
    table = game.move(table, 'p5', 'o');
    table = game.move(table, 'p6', 'x');
    table = game.move(table, 'p7', 'x');
    table = game.move(table, 'p8', 'x');
    table = game.move(table, 'p9', 'o');
    
    expect(game.isFinish(table)).toEqual({status:true, rule: 'Draw'});
  });

  test('should return a finish game with a Horizontal Top with x', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p7', 'o');
    table = game.move(table, 'p2', 'x');
    table = game.move(table, 'p8', 'o');
    table = game.move(table, 'p3', 'x');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Horizontal Top'});
  });

  test('should return a finish game with a Horizontal Top with o', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'o');
    table = game.move(table, 'p7', 'x');
    table = game.move(table, 'p2', 'o');
    table = game.move(table, 'p8', 'x');
    table = game.move(table, 'p3', 'o');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Horizontal Top'});
  });

  test('should return a finish game with a Horizontal Middle with x', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'o');
    table = game.move(table, 'p4', 'x');
    table = game.move(table, 'p8', 'o');
    table = game.move(table, 'p5', 'x');
    table = game.move(table, 'p3', 'o');
    table = game.move(table, 'p6', 'x');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Horizontal Middle'});
  });

  test('should return a finish game with a Horizontal Middle with o', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p4', 'o');
    table = game.move(table, 'p8', 'x');
    table = game.move(table, 'p5', 'o');
    table = game.move(table, 'p3', 'x');
    table = game.move(table, 'p6', 'o');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Horizontal Middle'});
  });

  test('should return a finish game with a Horizontal Bottom with x', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'o');
    table = game.move(table, 'p7', 'x');
    table = game.move(table, 'p5', 'o');
    table = game.move(table, 'p8', 'x');
    table = game.move(table, 'p3', 'o');
    table = game.move(table, 'p9', 'x');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Horizontal Bottom'});
  });

  test('should return a finish game with a Horizontal Bottom with o', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p7', 'o');
    table = game.move(table, 'p5', 'x');
    table = game.move(table, 'p8', 'o');
    table = game.move(table, 'p3', 'x');
    table = game.move(table, 'p9', 'o');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Horizontal Bottom'});
  });

  test('should return a finish game with a Vertical Left with x', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p2', 'o');
    table = game.move(table, 'p4', 'x');
    table = game.move(table, 'p8', 'o');
    table = game.move(table, 'p7', 'x');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Vertical Left'});
  });

  test('should return a finish game with a Vertical Left with o', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'o');
    table = game.move(table, 'p2', 'x');
    table = game.move(table, 'p4', 'o');
    table = game.move(table, 'p8', 'x');
    table = game.move(table, 'p7', 'o');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Vertical Left'});
  });

  test('should return a finish game with a Vertical Middle with x', () => {
    let table = game.newPlay();
    table = game.move(table, 'p2', 'x');
    table = game.move(table, 'p1', 'o');
    table = game.move(table, 'p5', 'x');
    table = game.move(table, 'p7', 'o');
    table = game.move(table, 'p8', 'x');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Vertical Middle'});
  });

  test('should return a finish game with a Vertical Middle with o', () => {
    let table = game.newPlay();
    table = game.move(table, 'p2', 'o');
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p5', 'o');
    table = game.move(table, 'p7', 'x');
    table = game.move(table, 'p8', 'o');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Vertical Middle'});
  });

  test('should return a finish game with a Vertical Right with x', () => {
    let table = game.newPlay();
    table = game.move(table, 'p3', 'x');
    table = game.move(table, 'p1', 'o');
    table = game.move(table, 'p6', 'x');
    table = game.move(table, 'p7', 'o');
    table = game.move(table, 'p9', 'x');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Vertical Right'});
  });

  test('should return a finish game with a Vertical Right with o', () => {
    let table = game.newPlay();
    table = game.move(table, 'p3', 'o');
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p6', 'o');
    table = game.move(table, 'p7', 'x');
    table = game.move(table, 'p9', 'o');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Vertical Right'});
  });

  test('should return a finish game with a Diagonal Left Right with x', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p3', 'o');
    table = game.move(table, 'p5', 'x');
    table = game.move(table, 'p6', 'o');
    table = game.move(table, 'p9', 'x');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Diagonal Left Right'});
  });

  test('should return a finish game with a Diagonal Left Right with o', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'o');
    table = game.move(table, 'p3', 'x');
    table = game.move(table, 'p5', 'o');
    table = game.move(table, 'p6', 'x');
    table = game.move(table, 'p9', 'o');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Diagonal Left Right'});
  });

  test('should return a finish game with a Diagonal Right Left with x', () => {
    let table = game.newPlay();
    table = game.move(table, 'p3', 'x');
    table = game.move(table, 'p1', 'o');
    table = game.move(table, 'p5', 'x');
    table = game.move(table, 'p4', 'o');
    table = game.move(table, 'p7', 'x');
      
    expect(game.isFinish(table)).toEqual({status: true, rule: 'Diagonal Right Left'});
  });

  test('should return false if move use a symbol that is diferent of x or o  ', () => {
    let table = game.newPlay();
    table = game.move(table, 'p3', 'y');
    table = game.move(table, 'p1', 'x');
    table = game.move(table, 'p5', 'y');
    table = game.move(table, 'p4', 'x');
    table = game.move(table, 'p7', 'y');
      
    expect(game.isFinish(table)).toBeFalsy();
  });

  test('should return same table if a move is make in a field filled', () => {
    let table = game.newPlay();
    table = game.move(table, 'p1', 'x');
      
    expect(game.move(table, 'p1', 'o')).toEqual(table);
  });

  test('should return same table if a move is call without table parameter', () => {
    let table = game.newPlay();
          
    expect(game.move(null, 'p1', 'o')).toBeFalsy();
  });
});