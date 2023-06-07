import { useCallback, useState, useEffect } from 'react';

function useFormStateAndValidation(initialValue = {}) {
    const [inputsValue, setInputsValues] = useState(initialValue);

    const [errorMessages, setErrorMessages] = useState({});

    const [formIsValid, setFormValidity] = useState(false);

    // function handleErrorMessage(name, message) {
    //     setErrorMessages((current) => ({
    //         ...current,
    //         [name]: message,
    //     }));
    // }

    // function checkInputValidity(name, value) {
    //     try {
    //         validationConfig[name].validateSync(value);
    //         handleErrorMessage(name, '');
    //     } catch (err) {
    //         handleErrorMessage(name, err.message);
    //     }
    // }

    // function checkFormValidity(value) {
    //     setFormValidity(() => validationSchema.isValidSync(value));
    // }

    function handleChange(evt) {
        const { name, value } = evt.target;
        const current = { ...inputsValue, [name]: value };
        // checkInputValidity(name, value);
        // checkFormValidity(current);
        setInputsValues(current);
    }

    const resetFormValues = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setInputsValues(newValues);
            setErrorMessages(newErrors);
            setFormValidity(newIsValid);
        },
        [setInputsValues, setErrorMessages, setFormValidity]
    );

    useEffect(() => {
        resetFormValues();
    }, [resetFormValues]);

    return {
        inputsValue,
        errorMessages,
        formIsValid,
        handleChange,
        resetFormValues,
    };
}

export default useFormStateAndValidation;
