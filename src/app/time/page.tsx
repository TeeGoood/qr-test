import dayjs from 'dayjs';
import React from 'react';

const Page = () => {
	return (
		<div>
			<h1>time</h1>
			<div>2024-08-03 17:50:33.865873 +0000 UTC</div>
			<div>{dayjs('2024-08-03 17:50:33.865873 +0000 UTC').format('HH:mm')}</div>
			<br />

			<div>now</div>
			<div>{dayjs().format('HH:mm')}</div>

            <div></div>
			<div>{dayjs('').format('HH:mm')}</div>
			<br />
		</div>
	);
};

export default Page;
