import './TwitterFollowCard.css';

export default function TwitterFollowCard({userName, name, isFollowing}) {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt={`${userName} avatar`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
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