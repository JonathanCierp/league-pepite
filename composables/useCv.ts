import { BaseAuthResponse, BaseResponse } from '~/interfaces'
import { User } from '~/interfaces/User'
import { toBase64 } from '~/utils';
import useNotification from '~/composables/useNotification';
import useCookie from '~/composables/useCookie';

const notification = useNotification()
const cookie = useCookie()

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
  const isLoadingButton = ref(false)
  const cv = useState('cv', () => [])
  const cvs = useState('cvs', () => [])

  const user = useState<User>('user')
  const cvForm = useState('cvForm', () => ({  
    user_id: user.value.id,
    firstname: user.value.firstname,
    lastname: user.value.lastname,
    job: jobOptions[0].key,
    email: user.value.email,
    phone: '',
    city: '',
    description: '',
    imageFile: {},
    imageB64: '',
    skills: [],
    softSkills: [],
    interests: [],
    educations: [ { ...baseEducation } ],
    experiences: [ { ...baseExperience } ]
  }))

  const skillsOptions = computed(() => useState('skills').value)
  const softSkillsOptions = computed(() => useState('softSkills').value)

  const getCv = async (id: any) => {
    try {
      const { data }: BaseResponse = await $fetch(`/cvs/${id}`, {
        method: 'GET',
        baseURL: config.API_URL,
        headers: {
          Authorization: `Bearer ${cookie?.getCookie('jwt')}`
        }
      })

      cv.value = data
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
      // TODO : Change for useRouter later
      window.location.href = '/profile/cvs'
    }
  }
  const getCvs = async () => {
    try {
      const { data }: BaseResponse = await $fetch('/cvs', {
        method: 'GET',
        baseURL: config.API_URL,
        headers: {
          Authorization: `Bearer ${cookie?.getCookie('jwt')}`
        }
      })

      cvs.value = data
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
      // TODO : Change for useRouter later
      window.location.href = '/profile/cvs'
    }
  }
  const saveCv = async () => {
    try {
      isLoadingButton.value = true
      cvForm.value.imageB64 = cvForm.value.imageFile.hasOwnProperty("name") ? await toBase64(cvForm.value.imageFile) : ''
      const { message }: BaseResponse = await $fetch('/cvs', { method: 'POST', body: cvForm.value, baseURL: config.API_URL })

      notification?.success(message)

      setTimeout(() => {
        // TODO : Change for useRouter later
        document.location.href = '/profile/cvs'
      }, 1500)
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
      isLoadingButton.value = false
    }
  }
  const editCv = async () => {
    try {
      isLoadingButton.value = true
      const { message }: BaseResponse = await $fetch(`/cvs/${cvForm.value.id}`, {
        method: 'PUT',
        body: cvForm.value,
        baseURL: config.API_URL,
        headers: {
          Authorization: `Bearer ${cookie?.getCookie('jwt')}`
        }
      })

      notification?.success(message)

      setTimeout(() => {
        // TODO : Change for useRouter later
        document.location.href = '/profile/cvs'
      }, 1500)
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
      isLoadingButton.value = false
    }
  }
  const previewCv = async (cv: any) => {
    localStorage.setItem('cvForm', JSON.stringify(cv))
  }
  const favoriteCv = async (cv: any) => {
    try {
      if (isLoadingButton.value) return

      const isConfirmed = confirm('Êtes vous sur de vouloir mettre en favori cette fiche ?')

      if (!isConfirmed) return

      isLoadingButton.value = true

      const { data, message }: BaseResponse = await $fetch(`/cvs/favorite/${cv.id}`, {
        method: 'PATCH',
        baseURL: config.API_URL,
        headers: {
          Authorization: `Bearer ${cookie?.getCookie('jwt')}`
        }
      })

      notification?.success(message)
      await getCvs()
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
      // TODO : Change for useRouter later
      window.location.href = '/profile/cvs'
    } finally {
      isLoadingButton.value = false
    }
  }
  const deleteCv = async (cv: any) => {
    try {
      if (isLoadingButton.value) return

      const isConfirmed = confirm('Êtes vous sur de vouloir supprimer cette fiche ?')

      if (!isConfirmed) return

      isLoadingButton.value = true

      const { message }: BaseResponse = await $fetch(`/cvs/${cv.id}`, {
        method: 'DELETE',
        baseURL: config.API_URL,
        headers: {
          Authorization: `Bearer ${cookie?.getCookie('jwt')}`
        }
      })

      notification?.success(message)
      cvs.value = cvs.value.filter((cvTemp: any) => cvTemp.id !== cv.id)
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
      // TODO : Change for useRouter later
      window.location.href = '/profile/cvs'
    } finally {
      isLoadingButton.value = false
    }
  }
  const openPreview = async () => {
    cvForm.value.imageB64 = cvForm.value.imageB64 ? cvForm.value.imageB64 : cvForm.value.imageFile.hasOwnProperty("name") ? await toBase64(cvForm.value.imageFile) : ''
    localStorage.setItem('cvForm', JSON.stringify(cvForm.value))
  }
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
    isLoadingButton,
    cvForm,
    getCv,
    getCvs,
    saveCv,
    editCv,
    previewCv,
    favoriteCv,
    deleteCv,
    openPreview,
    getSkills,
    getSoftSkills,
    addEducation,
    deleteEducation,
    addExperience,
    deleteExperience
  }
}