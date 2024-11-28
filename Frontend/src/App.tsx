import React, { useEffect, useRef, useState } from 'react';

const App: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]); 
    const [connectionStatus, setConnectionStatus] = useState<'Connected' | 'Disconnected'>('Disconnected');
    const inputRef = useRef<HTMLInputElement | null>(null); 
    const wsRef = useRef<WebSocket | null>(null); 

    useEffect(() => {
        // Create a new WebSocket connection
        const client = new WebSocket('ws://localhost:8080');
        wsRef.current = client; 

        client.onopen = () => {
            console.log('Connected to server');
            setConnectionStatus('Connected');
        };

        client.onmessage = (event: MessageEvent) => {
            const message = event.data as string;
            console.log(`Received from server: ${message}`);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        client.onclose = () => {
            console.log('Connection closed');
            setConnectionStatus('Disconnected');
        };

        // Cleanup WebSocket connection on component unmount
        return () => {
            client.close();
        };
    }, []); 
    // Function to send a message
    const messagesHandler = () => {
        const message = inputRef.current?.value; 
        if (message && wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(message); 
            inputRef.current.value = ''; 
        } else {
            console.log('WebSocket is not open');
        }
    };

    return (
        <div>
            <h1>WebSocket Example</h1>
            <p>Status: {connectionStatus}</p>
            <input ref={inputRef} type="text" placeholder="Enter your message" />
            <button onClick={messagesHandler} type="submit">
                Submit
            </button>
            <div>
                <h2>Messages:</h2>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;



