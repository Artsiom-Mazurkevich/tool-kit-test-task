import React from "react";

interface BadgeProps {
  text: string;
}


export const CustomBudge: React.FC<BadgeProps> = ({text}) => {
  const randomColor = () => {
    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <span style={{ backgroundColor: randomColor(), padding: '0.5em', borderRadius: '0.25em' }}>
      {text}
    </span>
  );
};

