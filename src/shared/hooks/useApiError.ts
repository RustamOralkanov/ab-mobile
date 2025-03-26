import { IApiError } from "../types/apiError";

export const useApiError = () => {
    const handleError = (error: unknown) => {
        const newError = error as IApiError;
        console.log(newError);
        return newError.data.message;
    };

    return {
        handleError,
    };
};
