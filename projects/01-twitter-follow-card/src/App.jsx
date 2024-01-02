import TwitterFollowCard from './TwitterFollowCard';
import './App.css';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false,
    isVerified: false
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: true,
    isVerified: true
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: false,
    isVerified: false
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: true,
    isVerified: false
  }
];

export default function App() {
  return (
    <main className='App'>
      <h2 className='App-title App-item-gap'>Who to follow</h2>

      <section className='App-users-list'>
        {
          users.map( user =>
            <TwitterFollowCard {...user} key={user.userName} />
          )
        }
      </section>

      <a className='App-link App-item-gap'
        href='https://twitter.com/i/connect_people'
        target='_blank'
        rel="noreferrer">
          Show more
      </a>
    </main>
  )
}