import React from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 1;
  }
`;

const Card = styled.div`
  position: fixed;
  width: 60px;
  height: 84px; // Standard playing card ratio
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  animation: ${fall} ${props => props.duration}s linear ${props => props.delay}s;
  animation-fill-mode: forwards;
  z-index: 1000;
  left: ${props => props.left}%;
  pointer-events: none;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${props => props.isRed ? '#D40000' : '#000000'};
  border: 1px solid #000000;
  
  &:before {
    content: '${props => props.suit}';
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 16px;
  }
  
  &:after {
    content: '${props => props.suit}';
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 16px;
    transform: rotate(180deg);
  }
`;

const FallingCards = () => {
  const suits = [
    { symbol: '♠', isRed: false },
    { symbol: '♥', isRed: true },
    { symbol: '♣', isRed: false },
    { symbol: '♦', isRed: true }
  ];

  const cards = Array.from({ length: 26 }, (_, i) => {
    const suitIndex = Math.floor(Math.random() * suits.length);
    return {
      id: i,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 1,
      delay: Math.random() * 0.5,
      suit: suits[suitIndex].symbol,
      isRed: suits[suitIndex].isRed
    };
  });

  return (
    <>
      {cards.map(card => (
        <Card
          key={card.id}
          left={card.left}
          duration={card.duration}
          delay={card.delay}
          suit={card.suit}
          isRed={card.isRed}
        >
          {card.suit}
        </Card>
      ))}
    </>
  );
};

export default FallingCards;