import { useEffect } from "react";

const fetchFlag = async () => {
    try {
        const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/746162');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const bookTitles = doc.querySelectorAll('body');
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
