import { useState } from 'react';
import { idText } from 'typescript';
import { mapSpots } from '../data/mapSpots';
import { CharacterSides } from '../types/CharacterSides';

export const useCharacter = () => {

    const [pos, setPos] = useState({x: 3, y: 5});
    const [side, setSide] = useState<CharacterSides>('down');
    

    // Mover para esquerda
    const moveLeft = () => {
        setPos(pos => ({
            x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
            y: pos.y
        }))
        setSide('left');
    }

    // Mover para direita
    const moveRight = () => {
        setPos(pos => ({
            x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
            y: pos.y
        }))
        setSide('right')
    }

    // Mover para baixo
    const moveDown = () => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y,
        }))
        setSide('down')
    }

    // Mover para cima
    const moveUp = () => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y,
        }))
        setSide('up')
    }
    

    // Vericar se pode mover
    const canMove = (x: number, y: number) => {
        if(x < 0 || y < 0) return false;

        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            if(mapSpots[y][x] === 1) {
                return true;
            }
        }

        return false;
    }


    return {
        x: pos.x,
        y: pos.y,
        side,
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    }
}
