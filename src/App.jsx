import './App.css'
import Avatar from './Avatar'
import Intro from './Intro'
import SkillList from './SkillList'

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81d',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
]

function App() {
  return (
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
        </div>
        <SkillList skills={skills} />
      </div>
    </>
  )
}

export default App
