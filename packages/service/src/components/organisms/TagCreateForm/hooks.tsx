import { useForm, UseFormMethods } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
//
import { Domain } from '../../../features'

export type TagCreateFormmPresenter = {
  state: {
    formState: UseFormMethods['formState']
    formErrors: UseFormMethods['errors']
  }
  actions: {
    handleRegister: UseFormMethods['register']
    handleGetValues: UseFormMethods['getValues']
    handleWatch: UseFormMethods['watch']
    handleSubmit: UseFormMethods['handleSubmit']
    handleReset: UseFormMethods['reset']
  }
}

export const useTagCreateFormm = () => {
  const id = uuid()
  const {
    formState,
    errors,
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
  } = useForm<Domain.Tag.TagCreateForm>({
    mode: 'onChange',
    defaultValues: {
      id: id,
      name: '',
      slug: '',
      description: '',
      sortOrder: 10,
      status: undefined,
    },
  })

  return {
    state: {
      formState,
      formErrors: errors,
    },
    actions: {
      handleGetValues: getValues,
      handleRegister: register,
      handleWatch: watch,
      handleReset: reset,
      handleSubmit,
    },
  } as TagCreateFormmPresenter
}
