import React from 'react';
import useReduxState from '../../hooks/useReduxState';
import style from './ArtistInfo.module.css';

const ArtistInfo = () => {
  const { artistInfo } = useReduxState();
  const { name, image, tags, bio } = artistInfo;
  const picture = image?.[0]?.[`#text`];
  const artistTags = tags?.tag;

  return (
    <div className={style.artistInfoWrapper}>
      <h2 className={style.artistName}>{name}</h2>
      <div className={style.imageTagsListWrapper}>
        <img
          src={picture}
          alt="artist pic"
          width="200"
          className={style.artistImage}
        />
        <ul className={style.tagsList}>
          {artistTags?.map(tag => (
            <li className={style.tagsListItem} key={tag.name}>
              #{tag.name}
            </li>
          ))}
        </ul>
      </div>
      <p>{bio?.content}</p>
    </div>
  );
};

export default ArtistInfo;
