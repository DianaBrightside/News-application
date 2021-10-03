import {
    useState,
    useEffect
} from "react";

function useFetchNews(pageSize, category) {
    const [userRequest, setUserRequest] = useState({
        error: null,
        isLoaded: false,
        items: [],
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                setUserRequest({
                    ...userRequest,
                    isLoaded: true,
                });
                const response = await fetch(
                    `https://content.guardianapis.com/search?q=${category}&show-tags=all&page-size=${pageSize}&show-fields=all&order-by=newest&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c`
                );
                const data = await response.json();
                const items = data.response.results;
                setUserRequest({
                    ...userRequest,
                    items: items,
                });
            } catch (error) {
                setUserRequest({
                    ...userRequest,
                    error: true,
                });
            }
        };
        fetchData();
    }, [category, pageSize]);
    return userRequest;
}

export {
    useFetchNews
};