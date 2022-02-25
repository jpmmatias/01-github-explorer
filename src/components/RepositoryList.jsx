import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

// https://api.github.com/orgs/rocketseat/repos

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
				{repositories.map((repo) => (
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
