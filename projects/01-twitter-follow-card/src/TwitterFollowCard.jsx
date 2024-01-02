import './TwitterFollowCard.css';
import verifiedIcon from './assets/XVerified.svg';

export default function TwitterFollowCard({userName, name, isFollowing, isVerified}) {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt={`${userName} avatar`} />
        
        <div className='tw-followCard-info'>
          <span className='tw-followCard-infoName'>
            <strong>{name}</strong>
            {
              isVerified && 
              <img src={verifiedIcon} alt='Verified User' className='tw-followCard-verifiedIcon' />
            }
          </span>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button type="button" className='tw-followCard-button'>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </aside>
    </article>
  )
}