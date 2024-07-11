import { toast } from "react-toastify";

export const ErrorToast = (title: React.ReactNode) => {
    toast.error(title, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};