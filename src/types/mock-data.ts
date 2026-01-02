interface UserData {
  fullName: string
  gender: string
  email: string
  phone: string
  dob: Date
  branch: string
  level: string
  position: string
  userType: string
}

interface GetUserDTO {
  FullName: string
  Email: string
  Dob: string
  Branch: string
  Level: string
  Position: string
  UserType: string
}

interface GetAdditionUserDTO {
  Bank: string
  BankAccount: string
  TaxCode: string
  EmergencyContact: string
  InsuranceStatus: string
  Identify: string
  Origin: string
  Residence: string
  CurrentAddress: string
  EmergencyPhone: string
  DOI: string
  IssuedBy: string
}

const dateTime = new Date()

const formatDate = (date: Date | string): string => {
  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};

export const fakeUserData: UserData = {
  fullName: "Phan Lê Tuấn",
  gender: "male",
  email: "tuan.phanle@ncc.asia",
  phone: "0932149716",
  dob: dateTime,
  branch: "SG",
  level: "Intern 2",
  position: "Dev",
  userType: "TTS",
}

export const fakeGetUserDTO: GetUserDTO = {
  FullName: fakeUserData.fullName,
  UserType: fakeUserData.userType,
  Email: fakeUserData.email,
  Level: fakeUserData.level,
  Dob: formatDate(fakeUserData.dob),
  Position: fakeUserData.position,
  Branch: fakeUserData.branch,
}

export const fakeGetAdditionalUser: GetAdditionUserDTO = {
  Bank: "Techcombank",
  Origin: "Vietnam",
  BankAccount: "123",
  Residence: "Vietname",
  TaxCode: "",
  CurrentAddress: "",
  EmergencyContact: "",
  EmergencyPhone: "",
  InsuranceStatus: "NONE",
  DOI: "",
  Identify: "33214",
  IssuedBy: "Ho Chi minh Police",
}
