import WorkDayImage from "../../../assets/pages/app-body/dashboard/enterprise/workday-image.png";
import FioriImage from "../../../assets/pages/app-body/dashboard/enterprise/fiori-image.png";
import ConcurImage from "../../../assets/pages/app-body/dashboard/enterprise/concur-image.png";
import MicrosoftEntraImage from "../../../assets/pages/app-body/dashboard/enterprise/microsoft-entra-image.png";

export const enterpriseList = [
    {
        id: 1,
        appName: "workday",
        appDescription: "cloud platform for managing finance, HR, and planning",
        appImage: WorkDayImage,
    },
    {
        id: 2,
        appName: "fiori sg users",
        appDescription: "tailored access to enterprise resources",
        appImage: FioriImage,
    },
    {
        id: 3,
        appName: "fiori non-sg users",
        appDescription: "tailored access to enterprise resources",
        appImage: FioriImage,
    },
    {
        id: 4,
        appName: "concur",
        appDescription: "providing seamless tracking and reporting",
        appImage: ConcurImage,
    },
    {
        id: 5,
        appName: "microsoft entra",
        appDescription: "secure, unified controls",
        appImage: MicrosoftEntraImage,
    }
]