import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import { defaultFormValut } from "./constants/defaultFormValue";
import resetPasswordPageStyles from "./reset-password.module.css";
import type { IResetForm } from "./types";

export const ResetPasswordPage = () => {
  const [resetForm, setResetForm] = useState<IResetForm>(defaultFormValut);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(resetForm);
  };

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "password") setResetForm((prev) => ({ ...prev, password: e.target.value }));
    if (e.target.name === "token") setResetForm((prev) => ({ ...prev, token: e.target.value }));
  };

  return (
    <form onSubmit={submitHandler} className={resetPasswordPageStyles.container}>
      <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
      <PasswordInput
        name='password'
        placeholder='password'
        value={resetForm.password}
        onChange={inputOnChangeHandler}
        extraClass='mt-6 mb-6'
        size='default'
      />
      <Input
        name='token'
        placeholder='Введите код из письма'
        value={resetForm.token}
        onChange={inputOnChangeHandler}
        extraClass='mt-6 mb-6'
        errorText='Введите код из письма'
        size='default'
      />
      <Button htmlType='submit' disabled={!resetForm.password || !resetForm.token} extraClass='mb-20'>
        Восстановить
      </Button>
      <div className={resetPasswordPageStyles.link_container}>
        <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</p>
        <Link to='/login' className='text text_type_main-default'>
          Войти
        </Link>
      </div>
    </form>
  );
};
