/* @jsxImportSource react */
'use client'
import { LogoCarousel } from '@/components/logo_carousel';
import logos from '@/lib/logos';
import shuffle from 'shuffle-array';
import Typewriter from 'typewriter-effect';

export default function Home() {
	const shuffled = shuffle(logos, { copy: true });
	
	return (
		<div className='h-full w-full flex items-center pt-[30vh] flex-col'>
			<div className='text-5xl text-center'>
				
				<div className="flex">
					<span className='whitespace-pre'>Hi, I'm </span>
					<div className='text-blue-700'>
						<Typewriter
							options={{
								cursor: '_',
								strings: 'Elliot Topper',
								autoStart: true,
							}}
							component={'h1'}
						/>
					</div>
				</div>
				<br/>
				<span>Nice to meet you!</span>
			</div>
			<LogoCarousel
				speed={20}
				products={shuffled}
			/>
		</div>
	);
}
