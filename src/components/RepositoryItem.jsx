import React from 'react';

export const RepositoryItem = ({ name, description, link }) => {
	return (
		<li>
			<strong>{name ?? 'Sem Nome'}</strong>
			<p>{description ?? 'Sem descrição'}</p>
			{link && <a href={link}>Acessar repositório</a>}
		</li>
	);
};
