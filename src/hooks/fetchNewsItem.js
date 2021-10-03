import {
    useState,
    useEffect
} from "react";

function useFetchNewsItem(id) {
    const [userRequest, setUserRequest] = useState({
        error: null,
        isLoaded: false,
        item: {},
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                setUserRequest({
                    ...userRequest,
                    isLoaded: true,
                });
                const response = await fetch(
                    `https://content.guardianapis.com/${id}?api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c&show-fields=bodyText,headline,byline,thumbnail,firstPublicationDate`
                );
                const data = await response.json();
                const item = data.response.content;
                setUserRequest({
                    ...userRequest,
                    item,
                });
            } catch (error) {
                setUserRequest({
                    ...userRequest,
                    error: true,
                });
            }
        };
        fetchData();
    }, [id]);
    return userRequest;
}

export {
    useFetchNewsItem
};