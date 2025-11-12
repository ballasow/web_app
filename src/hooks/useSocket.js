import { io } from "socket.io-client";
import { useEffect, useRef } from 'react';

// Minimal hook to provide a socket instance and disconnect on unmount.
export default function useSocket(url) {
	const socketRef = useRef(null);

	useEffect(() => {
		socketRef.current = io(url || '/');
					return () => {
						if (socketRef.current && typeof socketRef.current.disconnect === 'function') {
							socketRef.current.disconnect();
						}
					};
	}, [url]);

	return socketRef.current;
}