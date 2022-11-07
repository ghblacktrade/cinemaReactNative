import {TypeFatherIconNames} from "../../../shared/types/icon.types";
import {PressableProps} from "react-native";

export interface IButton extends PressableProps{
className?: string
    icon?: TypeFatherIconNames
}