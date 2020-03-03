import { useState } from "react";

const useForm = (setCurrentID,validate ) => {
    const initialFieldValues = {
        name: "",
        mobile: "",
        email: "",
        age: "",
        address: "",
        bloodGroup: ""
    };
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        const fieldValue = { [name]: value };
        setValues({ ...values, ...{ [name]: value } });
        validate(fieldValue);
    };

    const resetForm = () => {
        setValues({ ...initialFieldValues });
        setErrors({});
        setCurrentID(0);
    };

    return {
        values,
        setValues,
        setErrors,
        errors,
        onChangeHandler,
        resetForm
    };
};

export default useForm;
