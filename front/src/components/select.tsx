import arrow from '@/assets/arrow.svg';
import '@/styles/select.css';
import { useState } from 'react';

const options = ['volvo', 'fiat', 'hfvbsdiouvbn'];

export default function Select() {
  const [openSelect, setOpenSelect] = useState(false);
  const [valueSelect, setValueSelect] = useState('');

  const handleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleOptionClick = (value: string) => {
    setOpenSelect(false);
    setValueSelect(value);
  };

  return (
    <div className="select" role="combobox">
      <div className="principal-container" onClick={handleSelect}>
        <div className={!valueSelect ? 'placeholder' : ''}>
          {valueSelect || 'Selecione um motorista'}
        </div>
        {!openSelect && <img className="icon-arrow-down" src={arrow} />}
        {openSelect && <img className="icon-arrow-up" src={arrow} />}
      </div>

      <div className={openSelect ? 'options-container open-select' : 'options-container'}>
        <p className="option placeholder" onClick={() => handleOptionClick('')}>
          Selecione um motorista
        </p>
        {options.map((option, index) => (
          <p className="option" key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}
