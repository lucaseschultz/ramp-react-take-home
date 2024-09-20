import { useEffect } from "react";

export default function LoadedFlag() {
    useEffect(() => {
        fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/746162')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            //     do something with response here
            })
            // TypeError: Failed to fetch
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <span className={"loading"}>
      Loading<span className="dots"></span>
    </span>
    );
}
