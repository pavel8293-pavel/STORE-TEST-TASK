import axios from "axios";
import { ErrorToast } from "./components/toast/ErrorToast";

export const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        ErrorToast(error?.response?.data.error);
      }
}