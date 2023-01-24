import {atom} from "recoil";

export const isLogedinAtom = atom => ({
    key: 'isLogin',
    default :false
})
export const profileDataAtom = atom => ({
    key: 'profileData',
    default : {}
})