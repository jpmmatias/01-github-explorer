import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

interface IRepositoryItem {
	name: string;
	description: string;
	html_url: string;
	key: string;
	id: number;
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
			.then((response) => response.json())
			.then((data) => setRepositories(data));
	}, []);

	return (
		<section className='repository-list'>
			<h1>Repository List</h1>

			<ul>
				{repositories.map((repo: IRepositoryItem) => (
					<RepositoryItem
						name={repo.name}
						description={repo.description}
						link={repo.html_url}
						key={repo.id}
					/>
				))}
			</ul>
		</section>
	);
}
