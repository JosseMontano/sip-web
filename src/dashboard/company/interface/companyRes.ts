export interface CompanyResponse {
    message: string;
    data: Company[];
    status: number;
  }
  
 export interface Company {
    id: number;
    name: string;
    primaryColor: string;
    secondaryColor: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface CompanyDto {
    name: string;
    primaryColor: string;
    secondaryColor: string;
  }
  