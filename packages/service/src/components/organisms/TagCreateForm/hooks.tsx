import { useForm, UseFormMethods } from 'react-hook-form'
//
import { Domain } from '../../../features'

export type TagCreateFormPresenter = {
  state: {
    formState: UseFormMethods['formState']
    formErrors: UseFormMethods['errors']
  }
  actions: {
    handleRegister: UseFormMethods['register']
    handleWatch: UseFormMethods['watch']
    handleSubmit: UseFormMethods['handleSubmit']
  }
}

export const useTagCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    watch,
    errors,
  } = useForm<Domain.Tag.TagCreateForm>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      sortOrder: 100,
      status: undefined,
    },
  })

  return {
    state: {
      formState,
      formErrors: errors,
    },
    actions: {
      handleRegister: register,
      handleWatch: watch,
      handleSubmit,
    },
  } as TagCreateFormPresenter
}
