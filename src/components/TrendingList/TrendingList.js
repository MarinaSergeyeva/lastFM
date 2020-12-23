import React from 'react';
import useReduxState from '../../hooks/useReduxState';
import TrendingListItem from '../TrendingListItem/TrendingListItem';
// import styles from './TrendingListTransition.module.css';
import style from './TrendingList.module.css';
// import { Link } from 'react-router-dom';

const TrendingList = () => {
  const { topTracks } = useReduxState();
  console.log('topTracks', topTracks);

  return (
    topTracks.length > 0 && (
      <>
        <p>TrendingList</p>
        <div className={style.trendingList}>
          {topTracks.map(topTrack => (
            <TrendingListItem
              key={topTrack.name}
              name={topTrack.name}
              artist={topTrack.artist.name}
              image={topTrack.image}
              url={topTrack.url}
            />
          ))}
          {/* </TransitionGroup> */}
        </div>
      </>
    )
  );
};

// export default class TrendingList extends Component {
//   state = {
//     trendingList: [],
//   };

//   async componentDidMount() {
//     await API.getTrending().then(trendingList => {
//       this.setState(prevState => ({
//         trendingList: [...prevState.trendingList, ...trendingList],
//       }));
//     });
//     console.log('this.state', this.state);
//   }

//   render() {
//     const { trendingList } = this.state;
//     return (
//       <ul>
//         {trendingList.map(item => (
//           <li key={item.id}>
//             <Link
//               to={{
//                 pathname: `/movies/${item.id}`,
//               }}
//             >
//               {item.title ?? item.original_name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
export default TrendingList;
