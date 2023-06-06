import Skill from './Skill'

export default function SkillList({ skills }) {
  return (
    <div className='skill-list'>
      {skills.map(skill => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}
