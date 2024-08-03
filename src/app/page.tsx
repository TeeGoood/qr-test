'use client';

import { Html5Qrcode } from 'html5-qrcode';
import { useEffect, useState } from 'react';

const id = 'reader';

export default function Home() {
	const [qrcode, setQrcode] = useState<string | null>(null);

	useEffect(() => {
		const reader = new Html5Qrcode(id);
		reader
			.start(
				{ facingMode: 'environment' },
				{
					fps: 10,
					qrbox: { width: 500, height: 500 },
					aspectRatio: 1,
				},
				(decodedText) => {
					setQrcode(decodedText);
					console.log(decodedText);
				},
				(errorMessage) => {
					console.log(errorMessage);
				}
			)
			.then(() => {
				reader.applyVideoConstraints({ advanced: [{ zoom: 2.5, focusMode: 'continuous', } as any] });
			});

		return () => reader.clear();
	}, []);

	return (
		<main>
			<div>hello</div>
			<div
				id={id}
				className='w-[500px]'
			></div>
			{qrcode}
		</main>
	);
}
