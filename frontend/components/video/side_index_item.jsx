
import React from 'react';
import { Link } from 'react-router-dom';

const SideIndexItem = ({ video }) => {
  return (
    <li className='side-index-splash-li'>
      <Link to={`/watch/${video.id}`}>
        <div className='side-index-item-splash'>
          <video width="168" height="94" poster={video.poster} preload="metadata">
            <source
              src={video.videoUrl}
              type="video/mp4" />
          </video>
        </div>
      </Link>

      <div className='side-index-text'>
        <Link to={`/watch/${video.id}`} className='side-index-link'>
          <span className='side-index-title'>{video.title}</span>
          <br/>
          <div>
            <span className='side-index-author'>author_id: {video.author_id}</span>
          </div>
          <div>
            <span className='side-index-views'>588,087 views</span>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default SideIndexItem;