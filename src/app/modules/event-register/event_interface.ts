export interface Response {
    sessionDTO: SessionDTO;
    status: boolean;
    message: string;
    responseObject: ResponseObject;
}

export interface SessionDTO {
    status: boolean;
    reasonCode: string;
}

export interface ResponseObject {
    specialEventVillList: specialEventVillList[];
    designationList: designationList[];
    issueList: issueList[];
    fullStaffList: hcoUserList[];

}

export interface specialEventVillList {
    villageId: number;
    villageName: string;
}

export interface designationList {
    eventDesignationMasterId: number;
    designation: string;
}

export interface issueList {
    eventIssueMasterId: number;
    eventTypeMasterId: number
    issueName: string;
}

export interface hcoUserList {
    branch_id: number
    branch_name:string
    region_master_id:number
    region_name:string
    role_master_id:number
    role_shortname:string
    user_firstname:string
    user_id: number
    user_lastname:string
    user_middlename:string
    is_checked:boolean
    staffEventMapId:number
}


