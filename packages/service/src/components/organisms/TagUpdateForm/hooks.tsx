import { useForm, UseFormMethods } from 'react-hook-form'
//
import { Domain } from '../../../features'

export type TagUpdateFormmPresenter = {
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

export const useTagUpdateFormm = (tag: Domain.Tag.TagDetail) => {
  const { getTag } = tag
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
      id: getTag?.id,
      name: getTag?.name || '',
      slug: getTag?.slug || '',
      description: getTag?.description || '',
      sortOrder: getTag?.sortOrder || 10,
      status: getTag?.status || undefined,
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
  } as TagUpdateFormmPresenter
}
