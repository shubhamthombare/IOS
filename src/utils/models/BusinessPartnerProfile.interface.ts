export interface Person {
  businessPartnerId: string;
  name: string;
  relation: string;
  phone: string;
  email: string;
  dob: string;
}

export interface UpdatePerson extends Person {
  status: string;
  id: string;
}

export interface IFormattedGSTINTableResponse {
  gstin: string;
  DOI: string
  businessName: string
  tradeName: string;
}