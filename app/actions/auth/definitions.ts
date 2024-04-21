
export type TSignupFormState = {
    status: TStatus
    responseData: ISuccessSignUpState | IErrorSignUpState | IConflictSignUpState
}  | undefined | null

export interface IValidateFormValuesSignUpFormResponse{
    status: 'success' |'error',
    fieldsData:  ISuccessSignUpState | IErrorSignUpState
}

export interface IErrorSignUpState {
    password?: string[]
    name?: string[]
}

export interface ISuccessSignUpState {
    password: string
    name: string
}

export interface IConflictSignUpState {
    messages: string[]
}


export interface IValidateSignUpFormResponse{
    status: TStatus,
    state:  ISuccessSignUpState | IErrorSignUpState | IConflictSignUpState
}

type TStatus = 'success' | 'error' | 'conflict'