import { URLS } from "../../../config/urls"
import { CompanyDto } from "../interface/companyRes"

export const getCompanies = async () => {
    const response = await fetch(URLS.baseUrl + 'companies')
    const data = await response.json()
    return data
}

export const createCompany = async (company: CompanyDto) => {
    const response = await fetch(URLS.baseUrl + 'companies', {
        method: 'POST',
        body: JSON.stringify(company),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export const deleteCompany = async (id: number) => {
    const response = await fetch(URLS.baseUrl + `companies/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}