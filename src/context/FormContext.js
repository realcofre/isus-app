import React, { createContext } from 'react';
import { useForm } from 'react-hook-form';

const FormContext = createContext({});

export const FormProvider = ({ initValues, children }) => {
  const {
    register,
    errors,
    trigger,
    handleSubmit,
    setValue,
    getValues,
    control,
    unregister
  } = useForm({
    defaultValues: initValues || {},
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const setValues = obj => Object.keys(obj).forEach(key => setValue(key, obj[key]));

  return (
    <FormContext.Provider
      value={{
        register,
        errors,
        trigger,
        handleSubmit,
        setValue,
        setValues,
        getValues,
        control,
        unregister
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.defaultProps = {
  initValues: {},
};


export default FormContext;
