import { useState } from 'react';
import './TwitterFollowCard.css';
import verifiedIcon from './assets/XVerified.svg';

// eslint-disable-next-line react/prop-types
export default function TwitterFollowCard({userName = 'unknown', name, isFollowing: initialIsFollowing, isVerified}) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isFollowBtnOnHover, setIsFollowBtnOnHover] = useState(false);
  const followBtnClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt={`${userName} avatar`} />
        
        <div className='tw-followCard-info'>
          <a className='tw-followCard-infoLink'
            href={`https://x.com/${userName}`} target='_blank' rel="noreferrer">

            <span className='tw-followCard-infoName'>
              <strong>{name}</strong>
              {
                isVerified && 
                <img src={verifiedIcon} alt='Verified User' className='tw-followCard-verifiedIcon' />
              }
            </span>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
            
          </a>
        </div>
      </header>

      <aside>
        <button type="button" className={followBtnClassName}
          onClick={() => setIsFollowing(!isFollowing)}
          onMouseEnter={() => setIsFollowBtnOnHover(true)}
          onMouseLeave={() => setIsFollowBtnOnHover(false)}>
          { isFollowBtnOnHover && isFollowing ? 'Unfollow' : isFollowing ? 'Following' : 'Follow' }
        </button>
      </aside>
    </article>
  )
}