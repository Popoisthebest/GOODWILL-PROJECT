import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const COOKIE_EXPIRATION_DAYS = 1;

export const useFormStorage = (cookieKey: string) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const savedData = Cookies.get(cookieKey);
        if (savedData) {
            try {
                setFormData(JSON.parse(savedData));
            } catch (error) {
                console.error("쿠키 데이터 파싱 오류:", error);
            }
        }
    }, [cookieKey]);

    const updateFormData = (field: string, value: string) => {
        const updatedData = { ...formData, [field]: value };
        setFormData(updatedData);
        Cookies.set(cookieKey, JSON.stringify(updatedData), { expires: COOKIE_EXPIRATION_DAYS });
    };

    return { formData, updateFormData };
};
