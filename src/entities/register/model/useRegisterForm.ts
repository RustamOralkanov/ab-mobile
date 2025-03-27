import { usePostCheckPhoneMutation } from "@/shared/api";
import { useApiError } from "@/shared/hooks/useApiError";
import { usePhoneFormat } from "@/shared/hooks/usePhoneFormat";
import { useState } from "react";

export const useRegisterForm = () => {
    const { handleError } = useApiError();
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [status, setStatus] = useState<"off" | "submitting" | "submitted">("off");

    const [postCheckPhone] = usePostCheckPhoneMutation();

    const handlePhoneChange = (value: string) => {
        const formatted = usePhoneFormat(value);
        setPhone(formatted);
    };

    const onSubmit = async () => {
        if (phone.length !== 18) {
            setPhoneError("Заполните номер телефона!");
            return;
        }

        setStatus("submitting");
        try {
            const response = await postCheckPhone({ phone: phone.replace(/[\s\-\(\)]/g, "") }).unwrap();
            console.log(response, "response");
            setStatus("submitted");
        } catch (error) {
            console.log(handleError(error));
            setStatus("off");
        }
    };

    return {
        onSubmit,
        status,
        phone,
        handlePhoneChange,
        phoneError,
    };
};
