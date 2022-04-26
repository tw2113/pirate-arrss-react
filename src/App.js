import opml from './assets/feeds';
import PodcastLink from './components/podcastlink';


function App() {
	const parser = new DOMParser();
	const xml = parser.parseFromString(opml, 'text/xml');

	const podcast_items = Array.from(xml.querySelector('outline').children);
	let podcasts = [];

	podcast_items.forEach(function(item,index) { console.log(item)
		podcasts.push(
			{
				title: item.getAttribute('text'),
				url: item.getAttribute('htmlUrl')
			}
		);
	});
	/*podcast_items.map(
		item => (
			{
				['title']: item.getAttribute('text')
			}
		)
	);*/

	console.log(podcasts);
  return (
    <div className="outer">
			{
				podcasts.map(
					(podcast, i) => <PodcastLink key={i} podcast={podcast} />
				)
			}
    </div>
  );
}
export default App;
