import {ComponentType} from "react";

export type TypeRootStackParamList = {
    Auth: undefined
    Home: undefined

} & TypeRootStackParamAdmin

export type TypeRootStackParamAdmin = {
    Admin: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamAdmin
    component: ComponentType
    isAdmin?: boolean
}