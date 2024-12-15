import { format } from "date-fns";

const useFormatDeadline = (applicationDeadline) => {
    const formatedDeadline = format(new Date(applicationDeadline), "do LLL, yyyy");
    return formatedDeadline;
};

export default useFormatDeadline;