import { BaseAuthResponse } from '~/interfaces'
import { User } from '~/interfaces/User'

export default () => {
  const config = useState('config').value

  const jobOptions = [
    {
      key: 'DÉVELOPPEUR WEB FULLSTACK',
      value: 'Développeur web fullstack'
    },
    {
      key: 'DÉVELOPPEUR WEB FRONTEND',
      value: 'Développeur web frontend'
    },
    {
      key: 'DÉVELOPPEUR WEB BACKEND',
      value: 'Développeur web backend'
    }
  ]
  const interestOptions = [
    {
      key: 'game',
      value: 'Jeux',
      iconType: 'heroicon',
      icon: 'desktop-computer'
    },
    {
      key: 'music',
      value: 'Musique',
      iconType: 'feather',
      icon: 'headphones'
    },
    {
      key: 'photo',
      value: 'Photographie',
      iconType: 'heroicon',
      icon: 'camera'
    },
    {
      key: 'travel',
      value: 'Voyage',
      iconType: 'heroicon',
      icon: 'paper-airplane'
    }
  ]
  const baseEducation = {
    school_name: '',
    title: '',
    description: '',
    start_at: '',
    end_at: '',
  }
  const baseExperience = {
    compagny_name: '',
    title: '',
    description: '',
    start_at: '',
    end_at: '',
  }

  const user = useState<User>('user')
  const cvForm = useState('cvForm', () => ({  
    firstname: user.value.firstname,
    lastname: user.value.lastname,
    job: jobOptions[0].key,
    email: user.value.email,
    phone: '',
    city: '',
    informations: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    skills: [4],
    softSkills: [4, 5],
    interests: ['game', 'photo'],
    educations: [ { ...baseEducation } ],
    experiences: [ { ...baseExperience } ]
  }))

  const skillsOptions = computed(() => useState('skills').value)
  const softSkillsOptions = computed(() => useState('softSkills').value)
  
  const getSkills = async (): Promise<BaseAuthResponse> => await $fetch('/skills', { method: 'GET', baseURL: config.API_URL })
  const getSoftSkills = async (): Promise<BaseAuthResponse> => await $fetch('/soft_skills', { method: 'GET', baseURL: config.API_URL })
  const addEducation = () => cvForm.value.educations = [...cvForm.value.educations, { ...baseEducation }]
  const deleteEducation = (i: number) => cvForm.value.educations = cvForm.value.educations.filter((_, index) => i !== index)
  const addExperience = () => cvForm.value.experiences = [...cvForm.value.experiences, { ...baseExperience }]
  const deleteExperience = (i: number) => cvForm.value.experiences = cvForm.value.experiences.filter((_, index) => i !== index)

  return {
    jobOptions,
    interestOptions,
    skillsOptions,
    softSkillsOptions,
    cvForm,
    getSkills,
    getSoftSkills,
    addEducation,
    deleteEducation,
    addExperience,
    deleteExperience
  }
}