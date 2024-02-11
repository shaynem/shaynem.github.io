interface Skill {
    title: string
    competency: number
    category: string[]
  }
  
  interface Category {
    name: string
    color: string
  }
  
  export interface SkillsProps {
    skills: Skill[]
    categories: Category[]
  }