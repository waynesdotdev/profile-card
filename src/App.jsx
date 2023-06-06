import './App.css'
import Avatar from './Avatar'
import Intro from './Intro'
import SkillList from './SkillList'

function App() {
  return (
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
        </div>
        <SkillList />
      </div>
    </>
  )
}

export default App
