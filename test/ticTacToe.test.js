import ticTacToe from '../ticTacToe.js'
describe('suit test for tic-tac-toe game', () => {
  
  test('should create an object with 9 positions', () => {
    const game = ticTacToe('development');
    expect(game.getTableLength()).toBe(9);
  });

  test('should mantain all positions empty if position not informed', () => {
    const game = ticTacToe('development');
    const tableBefore = game.getTable();
    game.move('x');

    expect(game.getTable()).toBe(tableBefore);
  })

  test('should return same value to position if a move is make in a field filled', () => {
    const game = ticTacToe('development');
    game.move('x', 'p1');
    game.move('o', 'p1');
    const positionValue = game.getPositionValue('p1');
      
    expect(positionValue).toEqual('x');
  });

  describe('Move function suite', () => {
  
    test('should fill p1 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x', 'p1');
  
      expect(game.getPositionValue('p1')).toBe('x');
    })
  
    test('shoul fill p1 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o', 'p1');
  
      expect(game.getPositionValue('p1')).toBe('o');
    })
  
    test('should mantain p1 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y', 'p1');
  
      expect(game.getPositionValue('p1')).toBe('');
    })
  
    test('should fill p2 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x', 'p2');
  
      expect(game.getPositionValue('p2')).toBe('x');
    })
  
    test('should fill p2 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o', 'p2');
  
      expect(game.getPositionValue('p2')).toBe('o');
    })
  
    test('should mantain p2 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y', 'p2');
  
      expect(game.getPositionValue('p2')).toBe('');
    })
  
    test('should fill p3 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x', 'p3');
  
      expect(game.getPositionValue('p3')).toBe('x');
    })
  
    test('should fill p3 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o', 'p3');
  
      expect(game.getPositionValue('p3')).toBe('o');
    })
  
    test('should mantain p3 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y', 'p3');
  
      expect(game.getPositionValue('p3')).toBe('');
    })
  
    test('should fill p4 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x', 'p4');
  
      expect(game.getPositionValue('p4')).toBe('x');
    })
  
    test('should fill p4 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o', 'p4');
  
      expect(game.getPositionValue('p4')).toBe('o');
    })
  
    test('should mantain p4 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y', 'p4');
  
      expect(game.getPositionValue('p4')).toBe('');
    })
  
    test('should fill p5 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x', 'p5');
  
      expect(game.getPositionValue('p5')).toBe('x');
    })
  
    test('should fill p5 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o', 'p5');
  
      expect(game.getPositionValue('p5')).toBe('o');
    })
  
    test('should mantain p5 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y','p5');
  
      expect(game.getPositionValue('p5')).toBe('');
    })
  
    test('should fill p6 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x','p6');
  
      expect(game.getPositionValue('p6')).toBe('x');
    })
  
    test('should fill p6 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o', 'p6');
  
      expect(game.getPositionValue('p6')).toBe('o');
    })
  
    test('should mantain p6 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y','p6');
  
      expect(game.getPositionValue('p6')).toBe('');
    })
  
    test('should fill p7 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x','p7');
  
      expect(game.getPositionValue('p7')).toBe('x');
    })
  
    test('should fill p7 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o','p7');
  
      expect(game.getPositionValue('p7')).toBe('o');
    })
  
    test('should mantain p7 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y','p7');
  
      expect(game.getPositionValue('p7')).toBe('');
    })
  
    test('should fill p8 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x','p8');
  
      expect(game.getPositionValue('p8')).toBe('x');
    })
  
    test('should fill p8 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o','p8');
  
      expect(game.getPositionValue('p8')).toBe('o');
    })
  
    test('should mantain p8 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y','p8');
  
      expect(game.getPositionValue('p8')).toBe('');
    })
    
    test('should fill p9 position with "x" symbol' , () => {
      const game = ticTacToe('development');
      game.move('x','p9');
  
      expect(game.getPositionValue('p9')).toBe('x');
    })
  
    test('should fill p9 position with "o" symbol' , () => {
      const game = ticTacToe('development');
      game.move('o','p9');
  
      expect(game.getPositionValue('p9')).toBe('o');
    })
  
    test('should mantain p9 position empty if symbol is diferent of "x" or "o"', () => {
      const game = ticTacToe('development');
      game.move('y','p9');
  
      expect(game.getPositionValue('p9')).toBe('');
    })
  })

  describe('Positions suit tests', () => {
    test('should return status true if rule Horizontal Top is true', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('x','p2');
      game.move('x', 'p3');
  
      expect(game.isFinish()).toEqual({status:true, rule: 'Horizontal Top'});
    })
  
    test('should return status true if rule Horizontal Middle is true', () => {
      const game = ticTacToe('development');
      game.move('x','p4');
      game.move('x','p5');
      game.move('x','p6');
      
      expect(game.isFinish()).toEqual({status:true, rule: 'Horizontal Middle'});
    })
  
    test('should return status true if rule Horizontal Bottom is true', () => {
      const game = ticTacToe('development');
      game.move('x','p7');
      game.move('x','p8');
      game.move('x','p9');
      
      expect(game.isFinish()).toEqual({status:true, rule: 'Horizontal Bottom'});
    })
  
    test('should return status true if rule Vertical Left is true', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('x','p4');
      game.move('x','p7');
      
      expect(game.isFinish()).toEqual({status:true, rule: 'Vertical Left'});
    })
  
    test('should return status true if rule Vertical Middle is true', () => {
      const game = ticTacToe('development');
      game.move('x','p2');
      game.move('x','p5');
      game.move('x','p8');
      
      expect(game.isFinish()).toEqual({status:true, rule: 'Vertical Middle'});
    })
  
    test('should return status true if rule Vertical Right is true', () => {
      const game = ticTacToe('development');
      game.move('x','p3');
      game.move('x','p6');
      game.move('x','p9');
      
      expect(game.isFinish()).toEqual({status:true, rule: 'Vertical Right'});
    })
  
    test('should return status true if rule Diagonal Left Right is true', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('x','p5');
      game.move('x','p9');
      
      expect(game.isFinish()).toEqual({status:true, rule: 'Diagonal Left Right'});
    })
  
    test('should return status true if rule Diagonal Right Left is true', () => {
      const game = ticTacToe('development');
      game.move('x','p3');
      game.move('x','p5');
      game.move('x','p7');
      
      expect(game.isFinish()).toEqual({status:true, rule: 'Diagonal Right Left'});
    })
  
    test('should return true if game is draw', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('o','p2');
      game.move('x','p3');
      game.move('o','p4');
      game.move('x','p5');
      game.move('o','p6');
      game.move('x','p7');
      game.move('o','p8');
      game.move('x','p9');
      
      expect(game.isFinish()).toBeTruthy();
    });
  
    test('should return false if game is no draw', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      
      expect(game.isFinish()).toBeFalsy();
    });
  
    test('should return a finish game with a draw', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('o','p2');
      game.move('x','p3');
      game.move('o','p4');
      game.move('o','p5');
      game.move('x','p6');
      game.move('x','p7');
      game.move('x','p8');
      game.move('o','p9');
      
      expect(game.isFinish()).toEqual({status:true, rule: 'Draw'});
    });
  
    test('should return a finish game with a Horizontal Top with x', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('o','p7');
      game.move('x','p2');
      game.move('o','p8');
      game.move('x','p3');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Horizontal Top'});
    });
  
    test('should return a finish game with a Horizontal Top with o', () => {
      const game = ticTacToe('development');
      game.move('o','p1');
      game.move('x','p7');
      game.move('o','p2');
      game.move('x','p8');
      game.move('o','p3');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Horizontal Top'});
    });
  
    test('should return a finish game with a Horizontal Middle with x', () => {
      const game = ticTacToe('development');
      game.move('o','p1');
      game.move('x','p4');
      game.move('o','p8');
      game.move('x','p5');
      game.move('o','p3');
      game.move('x','p6');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Horizontal Middle'});
    });
  
    test('should return a finish game with a Horizontal Middle with o', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('o','p4');
      game.move('x','p8');
      game.move('o','p5');
      game.move('x','p3');
      game.move('o','p6');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Horizontal Middle'});
    });
  
    test('should return a finish game with a Horizontal Bottom with x', () => {
      const game = ticTacToe('development');
      game.move('o','p1');
      game.move('x','p7');
      game.move('o','p5');
      game.move('x','p8');
      game.move('o','p3');
      game.move('x','p9');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Horizontal Bottom'});
    });
  
    test('should return a finish game with a Horizontal Bottom with o', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('o','p7');
      game.move('x','p5');
      game.move('o','p8');
      game.move('x','p3');
      game.move('o','p9');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Horizontal Bottom'});
    });
  
    test('should return a finish game with a Vertical Left with x', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('o','p2');
      game.move('x','p4');
      game.move('o','p8');
      game.move('x','p7');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Vertical Left'});
    });
  
    test('should return a finish game with a Vertical Left with o', () => {
      const game = ticTacToe('development');
      game.move('o','p1');
      game.move('x','p2');
      game.move('o','p4');
      game.move('x','p8');
      game.move('o','p7');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Vertical Left'});
    });
  
    test('should return a finish game with a Vertical Middle with x', () => {
      const game = ticTacToe('development');
      game.move('x','p2');
      game.move('o','p1');
      game.move('x','p5');
      game.move('o','p7');
      game.move('x','p8');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Vertical Middle'});
    });
  
    test('should return a finish game with a Vertical Middle with o', () => {
      const game = ticTacToe('development');
      game.move('o','p2');
      game.move('x','p1');
      game.move('o','p5');
      game.move('x','p7');
      game.move('o','p8');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Vertical Middle'});
    });
  
    test('should return a finish game with a Vertical Right with x', () => {
      const game = ticTacToe('development');
      game.move('x','p3');
      game.move('o','p1');
      game.move('x','p6');
      game.move('o','p7');
      game.move('x','p9');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Vertical Right'});
    });
  
    test('should return a finish game with a Vertical Right with o', () => {
      const game = ticTacToe('development');
      game.move('o','p3');
      game.move('x','p1');
      game.move('o','p6');
      game.move('x','p7');
      game.move('o','p9');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Vertical Right'});
    });
  
    test('should return a finish game with a Diagonal Left Right with x', () => {
      const game = ticTacToe('development');
      game.move('x','p1');
      game.move('o','p3');
      game.move('x','p5');
      game.move('o','p6');
      game.move('x','p9');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Diagonal Left Right'});
    });
  
    test('should return a finish game with a Diagonal Left Right with o', () => {
      const game = ticTacToe('development');
      game.move('o','p1');
      game.move('x','p3');
      game.move('o','p5');
      game.move('x','p6');
      game.move('o','p9');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Diagonal Left Right'});
    });
  
    test('should return a finish game with a Diagonal Right Left with x', () => {
      const game = ticTacToe('development');
      game.move('x','p3');
      game.move('o','p1');
      game.move('x','p5');
      game.move('o','p4');
      game.move('x','p7');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Diagonal Right Left'});
    });
  
    test('should return a finish game with a Diagonal Right Left with o', () => {
      const game = ticTacToe('development');
      game.move('o','p3');
      game.move('x','p1');
      game.move('o','p5');
      game.move('x','p4');
      game.move('o','p7');
        
      expect(game.isFinish()).toEqual({status: true, rule: 'Diagonal Right Left'});
    });  
  })

  test('should return false if move use a symbol that is diferent of x or o  ', () => {
    const game = ticTacToe('development');
    game.move('p3', 'y');
    game.move('p1', 'x');
    game.move('p5', 'y');
    game.move('p4', 'x');
    game.move('p7', 'y');
      
    expect(game.isFinish()).toBeFalsy();
  });
});