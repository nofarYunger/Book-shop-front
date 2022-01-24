import { useEffect, useState } from "react";

// const [form, handleFormChange,setForm] = useForm({ name: '', vendor: '' })

// <input onChange = { setCar }/>

export const useForm = (initialState, cb = () => {}) => {
  const [form, setForm] = useState(initialState);

  // Now we also support a callback function
  // This is good in filter where you want to call setFilter each time an input changes
  useEffect(() => {
    cb(form);
  }, [form]);

  return [
    form,
    function ({ target }) {
      const name = target.name;
      let value = target.type === "number" ? +target.value : target.value;
      // if (!value) value = target.dataset.value;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    },
    function (value) {
      setForm(value);
    },
  ];
};
