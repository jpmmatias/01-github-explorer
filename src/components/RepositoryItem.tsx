import React from 'react';

interface PropsRepositoryItem {
	name: string;
	description: string;
	link: string;
}

export const RepositoryItem = ({
	name,
	description,
	link,
}: PropsRepositoryItem) => {
	return (
		<li>
			<strong>{name ?? 'Sem Nome'}</strong>
			<p>{description ?? 'Sem descrição'}</p>
			{link && <a href={link}>Acessar repositório</a>}
		</li>
	);
};
