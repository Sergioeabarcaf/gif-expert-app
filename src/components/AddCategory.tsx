import React, { useState } from 'react'
import PropTypes from 'prop-types';

interface AddCategoryProps {
  setCategories: Function
}

export const AddCategory = ({ setCategories }: AddCategoryProps) => {

  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputValue.trim().length > 1 && setCategories((categories: string[]) => [inputValue, ...categories]);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleInput}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
