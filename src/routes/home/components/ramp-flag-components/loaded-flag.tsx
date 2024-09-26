import { useEffect } from "react";

const fetchFlag = async () => {
    try {
        const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/746162');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const HTML = await response.text();
        const FLAG_URL = new DOMParser().parseFromString(HTML, "text/html");
        const FLAG_ARRAY = FLAG_URL.querySelector('body')!.textContent!.split('');
        const FLAG_CONTAINER = document.getElementsByClassName('flag-list');
        FLAG_ARRAY.forEach((letter) => {
            FLAG_CONTAINER[0].textContent += letter;
            setTimeout(() => {}, 500)
        });
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
        <span className={'flag-list'}>
        </span>
    );
}
