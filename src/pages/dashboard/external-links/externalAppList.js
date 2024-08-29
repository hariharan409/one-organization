// ENTERPRISE TAB IMAGES
import WorkDayImage from "../../../assets/pages/app-body/dashboard/enterprise/workday-image.png";
import FioriSGUserImage from "../../../assets/pages/app-body/dashboard/enterprise/fiori-sg-user-image.jpg";
import FioriNonSGUserImage from "../../../assets/pages/app-body/dashboard/enterprise/fiori-non-sg-user-image.jpg";
import ConcurImage from "../../../assets/pages/app-body/dashboard/enterprise/concur-image.png";
import MicrosoftEntraImage from "../../../assets/pages/app-body/dashboard/enterprise/microsoft-entra-image.png";
// TOP OF BUSINESS TAB IMAGES
import DeliveryOrderSystemImage from "../../../assets/pages/app-body/dashboard/line-of-business/delivery-order-system-image.jpg";
import EInvoiceImage from "../../../assets/pages/app-body/dashboard/line-of-business/e-invoice-image.jpg";
import EagleAnalyticsImage from "../../../assets/pages/app-body/dashboard/line-of-business/eagle-analytics-image.jpg";
import GoodGatePassImage from "../../../assets/pages/app-body/dashboard/line-of-business/good-gate-pass-image.jpg";
import IntegratedSubcontractorImage from "../../../assets/pages/app-body/dashboard/line-of-business/integrated-subcontractor-image.jpg";
import InvoicePlatformImage from "../../../assets/pages/app-body/dashboard/line-of-business/invoice-platform-image.jpg";
import MajorExporterSchemeImage from "../../../assets/pages/app-body/dashboard/line-of-business/major-exporter-scheme-image.jpg";
import OffenseManagementSystemImage from "../../../assets/pages/app-body/dashboard/line-of-business/offense-management-system-image.jpg";
import ResourceBookingSystemImage from "../../../assets/pages/app-body/dashboard/line-of-business/resource-booking-system-image.jpg";
import SeatriumFlexibleBenifitsImage from "../../../assets/pages/app-body/dashboard/line-of-business/seatrium-flexible-benifits-image.jpg";
import SubcontractorBrandingImage from "../../../assets/pages/app-body/dashboard/line-of-business/subcontractor-branding-image.jpg";
import SupplyChainSystemImage from "../../../assets/pages/app-body/dashboard/line-of-business/supply-chain-system-image.jpg";
import SupplyChainManagementImage from "../../../assets/pages/app-body/dashboard/line-of-business/supply-chain-management-image.jpg";
import SupplyChainManagementItemSegmentImage from "../../../assets/pages/app-body/dashboard/line-of-business/supply-chain-management-item-segment-image.jpg";
import ServiceRequestImage from "../../../assets/pages/app-body/dashboard/line-of-business/service-request-image.jpg";
import TimeManagementImage from "../../../assets/pages/app-body/dashboard/line-of-business/time-management-image.jpg";
import WaterAndElectricityImage from "../../../assets/pages/app-body/dashboard/line-of-business/water-and-electricity-image.jpg";
// IT HELPDESK TAB IMAGES
import HelpDeskImage from "../../../assets/pages/app-body/dashboard/it-helpdesk/help-desk-image.jpg";
import SelfServiceImage from "../../../assets/pages/app-body/dashboard/it-helpdesk/self-service-image.jpg";

export const enterpriseList = [
    {
        id: 1,
        appName: "Workday",
        appDescription: "cloud platform for managing finance, HR, and planning",
        appImage: WorkDayImage,
        appLink: "https://wd3.myworkday.com/wday/authgwy/seatrium/login.htmld",
        noSeatriumLink: "https://wd3.myworkday.com/wday/authgwy/seatrium/login.htmld?redirect=n"

    },
    {
        id: 2,
        appName: "Fiori SG Users",
        appDescription: "tailored access to enterprise resources",
        appImage: FioriSGUserImage,
        appLink: "https://erp.seatrium.com/fiori",
        noSeatriumLink: "https://erp.seatrium.com/sap/bc/ui2/flp?saml2=disabled"
    },
    {
        id: 3,
        appName: "Fiori Non-SG Users",
        appDescription: "tailored access to enterprise resources",
        appImage: FioriNonSGUserImage,
        appLink: "https://onesomerp.seatrium.com/fiori",
        noSeatriumLink: "https://onesomerp.seatrium.com/sap/bc/ui2/flp?saml2=disabled"
    },
    {
        id: 4,
        appName: "Concur",
        appDescription: "providing seamless tracking and reporting",
        appImage: ConcurImage,
        appLink: "https://launcher.myapps.microsoft.com/api/signin/f4a15dba-3d53-454f-bfea-ce2c46c8cf6d?tenantId=8d348135-f7aa-4a4c-a71c-31df44c7cac3",
        noSeatriumLink: "https://eu2.concursolutions.com/"
    },
    {
        id: 5,
        appName: "Microsoft Entra",
        appDescription: "secure, unified controls",
        appImage: MicrosoftEntraImage,
        appLink: "https://myaccess.microsoft.com/#/",
    }
];

export const lineOfBusinessList = [
    {
        id: 1,
        appName: "Delivery Order System (DOS)",
        appImage: DeliveryOrderSystemImage,
        appLink: "https://bspprd.seatrium.com/dos"
    },
    {
        id: 2,
        appName: "Eagle Analytics",
        appImage: EagleAnalyticsImage,
        appLink: "https://bnltomprdlbr.sembmarine.com/EAA/"
    },
    {
        id: 3,
        appName: "E-Invoice",
        appImage: EInvoiceImage,
        appLink: "https://einv.seatrium.com/eInvoice2INT/"
    },
    {
        id: 4,
        appName: "Good Gate Pass (GGP)",
        appImage: GoodGatePassImage,
        appLink: "https://bspprd.seatrium.com/ggp"
    },
    {
        id: 5,
        appName: "Integrated Subcontractor Resource Planning (iSRP)",
        appImage: IntegratedSubcontractorImage,
        appLink: "https://isrpcentral.seatrium.com"
    },
    {
        id: 6,
        appName: "Invoice Platform (IPS)",
        appImage: InvoicePlatformImage,
        appLink: "https://bspprd.seatrium.com/ips"
    },
    {
        id: 7,
        appName: "Major Exporter Scheme",
        appImage: MajorExporterSchemeImage,
        appLink: "https://bnltomprdlbr.sembmarine.com/fin"
    },
    {
        id: 8,
        appName: "Offense Management System (OMS)",
        appImage: OffenseManagementSystemImage,
        appLink: "https://eappsv2.seatrium.com/OMS"
    },
    {
        id: 9,
        appName: "Resource Booking System (RBS)",
        appImage: ResourceBookingSystemImage,
        appLink: "https://bspprd.seatrium.com/rbs"
    },
    {
        id: 10,
        appName: "Seatrium Flexible Benefits",
        appImage: SeatriumFlexibleBenifitsImage,
        appLink: "https://hk.perquisite.net/RewardCentre/M/Login#/"
    },
    {
        id: 11,
        appName: "Subcontractor Branding System (SBS)",
        appImage: SubcontractorBrandingImage,
        appLink: "https://eappsV2.seatrium.com/CBS"
    },
    {
        id: 12,
        appName: "Supply Chain System",
        appImage: SupplyChainSystemImage,
        appLink: "https://bnltomprdlbr.sembmarine.com/scs"
    },
    {
        id: 13,
        appName: "Supply Chain Management",
        appImage: SupplyChainManagementImage,
        appLink: "https://eappsv2.seatrium.com/SCM"
    },
    {
        id: 14,
        appName: "Supply Chain Management Item Segmentation",
        appImage: SupplyChainManagementItemSegmentImage,
        appLink: "https://eappsv2.seatrium.com/SCMItem"
    },
    {
        id: 15,
        appName: "Service Request Management (SRM)",
        appImage: ServiceRequestImage,
        appLink: "https://bnltomprdlbr.sembmarine.com/srm"
    },
    {
        id: 16,
        appName: "Time Management System (TMS)",
        appImage: TimeManagementImage,
        appLink: "https://bnltomprdlbr.sembmarine.com/tmx"
    },
    {
        id: 17,
        appName: "Water & Electricity System (WES)",
        appImage: WaterAndElectricityImage,
        appLink: "https://bspprd.seatrium.com/wes"
    },
];

export const itHelpDeskList = [
    {
        id: 1,
        appName: "Access Help Desk",
        appImage: HelpDeskImage,
        appLink: "https://ithelp.seatrium.com"
    },
    {
        id: 2,
        appName: "Self Service",
        appImage: SelfServiceImage,
        appLink: "https://passwordreset.microsoftonline.com/"
    }
];