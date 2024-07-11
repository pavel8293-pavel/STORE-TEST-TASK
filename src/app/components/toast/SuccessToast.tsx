import { toast } from "react-toastify";

export const SuccessToast = (title: React.ReactNode) => {
    toast.success(title, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};