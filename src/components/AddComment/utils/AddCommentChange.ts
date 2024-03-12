import { useState } from 'react';

export const AddCommentChange = () => {
  const [valueCaracters, setValueCaracters] = useState<number>(250);
  const [texto, setTexto] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredText = evt.target.value;
    setTexto(enteredText);

    const valueTextoNumber = enteredText.trim().split(' ').filter(Boolean);
    const valuePlus = valueTextoNumber.reduce(
      (acumulador: number, palabraActual: string) =>
        acumulador + palabraActual.length,
      0
    );
    const newValue = 250 - valuePlus;

    setValueCaracters(newValue);
  };

  return { valueCaracters, texto, handleChange };
};
