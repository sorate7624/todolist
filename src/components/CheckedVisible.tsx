import React from 'react';
import { useState, useEffect } from 'react';
import { DoneImage } from "../TodoList.styles";
import ClappingRaccon from "../assets/clapping-raccon.gif";

type Props = {
  delay: number;
}

export const CheckedVisible = (props: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setVisible(false);
    }, props.delay);

    return () => clearTimeout(timer);
  }, [props.delay]);

  return visible ? <DoneImage src={ClappingRaccon} alt="clapping-raccon"></DoneImage> : null;
};