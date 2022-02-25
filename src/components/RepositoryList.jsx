import { RepositoryItem } from './RepositoryItem';

export function RepositoryList() {
	return (
		<section className='repository-list'>
			<h1>Repository List</h1>
			<ul>
				<RepositoryItem name='Repositório 1' />
				<RepositoryItem name='Repositório 2' />
				<RepositoryItem />
			</ul>
		</section>
	);
}
