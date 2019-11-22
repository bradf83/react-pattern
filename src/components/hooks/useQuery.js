import {useLocation} from "react-router-dom";

/**
 * Get query parameters.  This is straight from React Router Dom's Query Params example.
 * @returns {URLSearchParams}
 */
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export default useQuery;