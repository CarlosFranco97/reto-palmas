import { ReactNode } from "react";

export interface BaseLayoutTypes {
    header: ReactNode, 
    children: ReactNode, 
    footer: ReactNode, 
    bgColor?: string
}