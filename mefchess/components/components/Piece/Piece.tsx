import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCell } from '@/lib/store';
import Image from 'next/image';

interface PieceProps {
  name: string;
  pos: string;
}

const Piece: React.FC<React.PropsWithChildren<PieceProps>> = ({
  name,
  pos
}) => {
  const dispatch = useDispatch();
  const piece = useRef<HTMLImageElement>(null);

  const color = name === name.toUpperCase() ? 'w' : 'b';
  var imageName = color + name.toUpperCase();
  if (name.length < 1 ) {
    imageName = 'empty';
  }

  const fallback = () => `/assets/images/empty.png`;

  const handleDragStart = async () => {
    try {
      dispatch(setSelectedCell(pos));
      setTimeout(() => {
        if (piece.current) piece.current.style.display = 'none';
      }, 0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDragEnd = () => {
    if (piece.current) piece.current.style.display = 'block';
  };

  return (
    <Image
      src={`/assets/images/${imageName}.png`}
      className="piece"
      alt=""
      draggable={true}
      ref={piece}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      width={100}
      height={100}
    />
  );
};

export default Piece;
