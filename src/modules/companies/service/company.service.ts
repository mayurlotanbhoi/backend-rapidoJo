import { ApiResponse } from "../../../shared/response/api-response";
import { toAdminRow } from "../../../shared/utils/admin-format";
import { CompanyDto } from "../dto/company.dto";
import { CompanyRepository } from "../repository/company.repository";

export class CompanyService {
  private repository = new CompanyRepository();

  async create(payload: CompanyDto) {
    const company = await this.repository.create(payload);
    return new ApiResponse(true, "Company created successfully", toAdminRow(company.toObject()));
  }

  async getCompanies(page = 1, limit = 25, search = "") {
    const companies = await this.repository.getCompanies(page, limit, search);
    return new ApiResponse(true, "Companies fetched successfully", companies);
  }

  async update(id: string, payload: Partial<CompanyDto>) {
    const company = await this.repository.update(id, payload);
    return new ApiResponse(true, "Company updated successfully", company ? toAdminRow(company as any) : null);
  }

  async delete(id: string) {
    const company = await this.repository.delete(id);
    return new ApiResponse(true, "Company deleted successfully", company);
  }
}
