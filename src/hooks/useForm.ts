import React, { FormEvent, useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    // e.persist();
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, handleSubmit };
};
