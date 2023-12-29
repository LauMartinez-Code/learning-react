import TwitterFollowCard from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
];

export default function App() {
  return (
    <section className='App'>
      {
        users.map( user =>
          <TwitterFollowCard {...user} key={user.userName} /> 
        )
      }
      
    </section>
  )
}