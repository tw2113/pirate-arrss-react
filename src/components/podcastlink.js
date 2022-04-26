export default function PodcastLink( props ) {
	const { podcast } = props
	console.log(podcast);
	return (
		<div>
			<a href={podcast.url}>{podcast.title}</a>
		</div>
	)
}
