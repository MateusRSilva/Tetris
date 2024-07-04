import './tetris.css'
import Tetris from 'react-tetris'
import React from 'react'
import Balloon from './ballon';
// const React = require('react');
// const Tetris = require('react-tetris');

const TetrisGame = () => (
  <div>
    <Tetris
      keyboardControls={{
        // Default values shown here. These will be used if no
        // `keyboardControls` prop is provided.
        down: 'MOVE_DOWN',
        left: 'MOVE_LEFT',
        right: 'MOVE_RIGHT',
        space: 'HARD_DROP',
        z: 'FLIP_COUNTERCLOCKWISE',
        x: 'FLIP_CLOCKWISE',
        up: 'FLIP_CLOCKWISE',
        p: 'TOGGLE_PAUSE',
        c: 'HOLD',
        shift: 'HOLD'
      }}
    >
      {({
        HeldPiece,
        Gameboard,
        PieceQueue,
        points,
        linesCleared,
        state,
        controller
      }) => (
        <div className='gameContainer'>
          <div className='userView'>
            <div>
              <p>Points: {points}</p>
              <p>Cleared: {linesCleared}</p>
            </div>
            <HeldPiece />
          </div>
          <Gameboard />
          <div className='pieceQueue'>
            <PieceQueue />
          </div>
          {state === 'LOST' && (
            <div className='lostContaine'>
              <div className='lost'>
                <h2>Game Over</h2>
                <div class="button" onClick={controller.restart}><a>New Game</a></div>
              </div>
            </div>
          )}
          <Balloon />
        </div>
      )}
    </Tetris>
  </div>
);

export default TetrisGame;