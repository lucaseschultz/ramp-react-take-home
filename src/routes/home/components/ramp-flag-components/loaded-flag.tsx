import { useEffect } from "react";

const fetchFlag = async () => {
    try {
        const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/746162');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const HTML = await response.text();
        const PARSER = new DOMParser();
        const FLAG_URL = PARSER.parseFromString(HTML, "text/html");
        const FLAG_CONTAINER = FLAG_URL.querySelector('body');
        if (!FLAG_CONTAINER) {
            throw new Error('No Body Element Found');
        } else {
            const FLAG = FLAG_CONTAINER.textContent;
            if (!FLAG) {
                throw new Error('Nothing found in page body')
            } else {
                const FLAG_ARRAY = FLAG.split('');
                FLAG_ARRAY.forEach(() => {

                });
            }
        }
    } catch (error) {
        // TypeError: Failed to fetch
        console.log(error);
    }
}

export default function LoadedFlag() {
    useEffect(() => {
        fetchFlag();
    }, []);
    return (
        <ol className={'flag-list'}>
        </ol>
    );
}
