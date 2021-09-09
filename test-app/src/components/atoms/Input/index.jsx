import React from 'react'
import * as S from './style'

function Input({ value, placeholder, className, inputRef, onChange, onFocus, type, name }) {
  return (
    <S.Input
      name={name}
      value={value}
      type={type}
      className={className}
      placeholder={placeholder}
      ref={inputRef}
      onChange={onChange}
      onFocus={onFocus}
    />
  )
}

export default Input
