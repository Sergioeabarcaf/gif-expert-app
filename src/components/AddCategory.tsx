import React, { useState } from 'react'

interface AddCategoryProps {
    setCategories: Function
}

export const AddCategory = (props: AddCategoryProps) => {

    const [inputValue, setInputValue] = useState('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        inputValue.trim().length > 1 && props.setCategories( (categories: string[]) =>  [...categories, inputValue])
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
            type='text'
            value={ inputValue }
            onChange={ handleInput }
            />
        </form>
    )
}
