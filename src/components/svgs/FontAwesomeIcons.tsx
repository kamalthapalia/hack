import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faForward, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

export const OpenCloseEyeIcon = (props: FontAwesomeIconProps) => {
    return (
        <FontAwesomeIcon {...props} fontSize={"1.5rem"} />
    )
}
// export const FileExportIcon = () => {
//     return (
//         <FontAwesomeIcon icon={faFileExport} fontSize={"2rem"}/>
//     )
// }

// for profiles
// export const ProfileIcon = () => {
//     return (
//         <FontAwesomeIcon icon={faUser} fontSize={"2rem"}/>
//     )
// }

// export const UpdateLogo = () => {
//     return (
//         <FontAwesomeIcon icon={faRefresh} fontSize={"1.5rem"} />
//     )
// }
export const LogOutLogo = () => {
    return (
        <FontAwesomeIcon icon={faRightFromBracket} fontSize={"1.5rem"} />
    )
}

// dashboard
export const SeeMoreIcon = () => {
    return (
        <FontAwesomeIcon icon={faForward} fontSize={"1.5rem"} />
    )
}
