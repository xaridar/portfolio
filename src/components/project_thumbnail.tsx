'use client';

import { ProjectInterface } from '@/models/Project';
import { Dispatch, SetStateAction } from 'react';
import { css } from '@/lib/emotion';

interface ProjectThumbnailProps {
	project: ProjectInterface;
	active: boolean;
	id: string;
	setActive: Dispatch<SetStateAction<string>>;
	setSelected: Dispatch<SetStateAction<ProjectInterface>>;
}

export const ProjectThumbnail = (props: ProjectThumbnailProps) => {
	return (
		<button
			className={`${props.active ? 'flex-0' : 'flex-1'} w-1/4 cursor-pointer h-full relative transition-[flex]`}
			css={css({
				background: `linear-gradient(rgb(255 255 255 / ${+props.active * 0.5}), rgb(255 255 255 / ${
					+props.active * 0.5
				})), url(/images/${props.project.image_link})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			})}
			onClick={() => {
				props.setSelected(props.project);
				props.setActive(props.id);
			}}
			onMouseEnter={() => props.setActive(props.id)}
			aria-label={`View ${props.project.title}`}>
			{props.active && (
				<h4 className='select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-4'>
					{props.project.title}
				</h4>
			)}
		</button>
	);
};
