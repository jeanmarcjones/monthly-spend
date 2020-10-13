import React  from 'react';
import { useForm } from './hooks/useForm';
import './App.css';

interface FormState {
  shop: string;
  amount: number;
  month: string;
  type: string;
}

function App() {
  const formState = {
    shop: '',
    amount: 0.00,
    month: '',
    type: '',
  }
  const { values, handleChange, handleSubmit } = useForm<FormState>(formState);
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Shop:
          <input className="input" type="text" name="shop" onChange={handleChange} value={values.shop} />
        </label>
        <label className="label">
          Amount:
          <input className="input" type="text" name="amount" onChange={handleChange} value={values.amount} />
        </label>
        <label className="label">
          Month:
          <input className="input" type="text" name="month" onChange={handleChange} value={values.month} />
        </label>
        <label className="label">
          Type:
          <input className="input" type="text" name="type" onChange={handleChange} value={values.type} />
        </label>
        <input className="submit" type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
