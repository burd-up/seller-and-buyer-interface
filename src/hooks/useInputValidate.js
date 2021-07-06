import {useState} from 'react';

export function useInputValidate(initialValue) {

    const [isBlur, setIsBlur] = useState(false);

    const [value, setValue] = useState(initialValue);

    //прошли ли мы валидацию
    const [validateStatus, setValidateStatus] = useState(false);

    //если не прошли валидацию и нажали на отправку, фиксируем это и передаем в инпуты для подсвечивания полей
    const [showHints, setShowHints] = useState(false);

    return {
        value, setValue, validateStatus, setValidateStatus, showHints, setShowHints, isBlur, setIsBlur
    }
}