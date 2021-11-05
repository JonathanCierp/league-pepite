import { ref, useStore, computed } from "@nuxtjs/composition-api";

const useCv = () => {
    const store = useStore()
    
    const jobOptions = [
      {
        key: "DÉVELOPPEUR WEB FULLSTACK",
        value: "Développeur web fullstack"
      },
      {
        key: "DÉVELOPPEUR WEB FRONTEND",
        value: "Développeur web frontend"
      },
      {
        key: "DÉVELOPPEUR WEB BACKEND",
        value: "Développeur web backend"
      }
    ]
    const baseEducation = {
        school_name: '',
        title: '',
        description: '',
        start_at: '',
        end_at: ''
    }
    const baseExperience = {
        compagny_name: '',
        title: '',
        description: '',
        start_at: '',
        end_at: ''
    }

    const cvFormFirstname = computed({
        get: () => store.state.users.cvForm.firstname,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'firstname' })
    })
    const cvFormLastname = computed({
        get: () => store.state.users.cvForm.lastname,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'lastname' })
    })
    const cvFormJob = computed({
        get: () => store.state.users.cvForm.job,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'job' })
    })
    const cvFormEmail = computed({
        get: () => store.state.users.cvForm.email,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'email' })
    })
    const cvFormPhone = computed({
        get: () => store.state.users.cvForm.phone,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'phone' })
    })
    const cvFormCity = computed({
        get: () => store.state.users.cvForm.city,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'city' })
    })
    const cvFormInformations = computed({
        get: () => store.state.users.cvForm.informations,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'informations' })
    })
    const cvFormSkills = computed({
        get: () => store.state.users.cvForm.skills,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'skills' })
    })
    const cvFormSoftSkills = computed({
        get: () => store.state.users.cvForm.softSkills,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'softSkills' })
    })
    const cvFormEducations = computed({
        get: () => store.state.users.cvForm.educations,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'educations' })
    })
    const cvFormExperiences = computed({
        get: () => store.state.users.cvForm.experiences,
        set: (v) => store.commit('users/setCvFormByField', { v, type: 'experiences' })
    })
    const skillsOptions = computed(() => store.state.users.skills)
    const softSkillsOptions = computed(() => store.state.users.softSkills)

    const addEducation = () => cvFormEducations.value = [...cvFormEducations.value, { ...baseEducation }]
    const deleteEducation = (i) => cvFormEducations.value = cvFormEducations.value.filter((_, index) => i !== index)
    const addExperience = () => cvFormExperiences.value = [...cvFormExperiences.value, { ...baseExperience }]
    const deleteExperience = (i) => cvFormExperiences.value = cvForm.value.experiences.filter((_, index) => i !== index)

    return {
      jobOptions,
      baseEducation,
      baseExperience,
      cvFormFirstname,
      cvFormLastname,
      cvFormJob,
      cvFormEmail,
      cvFormPhone,
      cvFormCity,
      cvFormInformations,
      cvFormSkills,
      cvFormSoftSkills,
      cvFormEducations,
      cvFormExperiences,
      skillsOptions,
      softSkillsOptions,
      addEducation,
      deleteEducation,
      addExperience,
      deleteExperience
    }
}

export default useCv