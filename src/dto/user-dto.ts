import type { UserAPI } from "@/types/response"

interface GetUserDTO {
  FullName: string | undefined
  Email: string | undefined
  Dob: string | undefined
  Branch: string | undefined
  Level: string | undefined
  Position: string | undefined
  UserType: string | undefined
}

interface GetAdditionUserDTO {
  Bank: string | undefined
  BankAccount: string | undefined
  TaxCode: string | undefined
  EmergencyContact: string | undefined
  InsuranceStatus: string | undefined
  Identify: string | undefined
  Origin: string | undefined
  Residence: string | undefined
  CurrentAddress: string | undefined
  EmergencyPhone: string | undefined
  DOI: string | undefined
  IssuedBy: string | undefined
}

export interface getRoles {
  name: string | undefined
}

const formatDate = (date: Date | string | undefined): string => {
  if (date === undefined) {
    return ""
  }
  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};

export const UserDTO = (userData: UserAPI | null): GetUserDTO => {
  const result: GetUserDTO = {
    FullName: userData?.full_name,
    UserType: userData?.user_type_name,
    Email: userData?.email,
    Level: userData?.level_name,
    Dob: formatDate(userData?.dob),
    Position: userData?.position_name,
    Branch: userData?.branch_name,
  }
  return result
}

export const AdditionalUserDTO = (userData: UserAPI | null): GetAdditionUserDTO => {
  const result: GetAdditionUserDTO = {
    Bank: "Techcombank",
    Origin: "Vietnam",
    BankAccount: userData?.bank_account,
    Residence: "Vietname",
    TaxCode: "",
    CurrentAddress: userData?.address,
    EmergencyContact: "",
    EmergencyPhone: "",
    InsuranceStatus: "NONE",
    DOI: userData?.identify_issue_date,
    Identify: userData?.identify_number,
    IssuedBy: userData?.identify_place,
  }

  return result
}


export const getAdditionalTitle: Record<string, string> = {
  "Bank": "Bank",
  "Origin": "Place of origin",
  "BankAccount": "Bank Account",
  "Residence": "Place of residence",
  "TaxCode": "Tax Code",
  "CurrentAddress": "Current Address",
  "EmergencyContact": "Emergency Contact",
  "EmergencyPhone": "Emergency Contact Phone",
  "InsuranceStatus": "Insurance Status",
  "DOI": "Date of issue",
  "Identify": "Identify",
  "IssuedBy": "Issued By"
}
