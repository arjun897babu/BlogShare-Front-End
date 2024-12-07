import { handleAxiosError, isApiError } from "../utility/validator-helper";

const useErrorObject = (setError: (key: string, message: string) => void) => { //pass a setError function as a callback
    function changeError(error: unknown) {
        const er = handleAxiosError(error)
        if (isApiError(er)) {
            for (let key in er.error) {
                let err = er.error[key];
                setError(key, err)
            }
        }
    }
    return changeError;
};

export default useErrorObject;
