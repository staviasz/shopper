import arrow from '@/assets/arrow.svg';
import '@/styles/select.css';
import { useState } from 'react';

interface SelectProps {
  onChange: (value: number) => void;
}

export default function Select({ onChange }: SelectProps) {
  const [openSelect, setOpenSelect] = useState(false);
  const [textSelect, setTextSelect] = useState('');

  const handleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleOptionClick = (value: string, id: number) => {
    setOpenSelect(false);
    setTextSelect(value);
    onChange(id);
  };

  return (
    <div className="select" role="combobox">
      <div className="principal-container" onClick={handleSelect}>
        <div className={!textSelect ? 'placeholder' : ''}>{textSelect || 'Todos'}</div>
        {!openSelect && <img className="icon-arrow-down" src={arrow} />}
        {openSelect && <img className="icon-arrow-up" src={arrow} />}
      </div>

      <div className={openSelect ? 'options-container open-select' : 'options-container'}>
        <p className="option placeholder" onClick={() => handleOptionClick('', 0)}>
          Todos
        </p>
        <p className="option" onClick={() => handleOptionClick('Homer Simpson', 1)}>
          Homer Simpson
        </p>
        <p className="option" onClick={() => handleOptionClick('Dominic Toretto', 2)}>
          Dominic Toretto
        </p>
        <p className="option" onClick={() => handleOptionClick('James Bond', 3)}>
          James Bond
        </p>
      </div>
    </div>
  );
}
