import { listResponse, toAdminRow } from "../../../shared/utils/admin-format";
import { CompanyDto } from "../dto/company.dto";
import CompanyModel from "../model/model";

export class CompanyRepository {
  async create(payload: CompanyDto) {
    return CompanyModel.create(payload);
  }

  async getCompanies(page = 1, limit = 25, search = "") {
    const skip = (page - 1) * limit;
    const filter: any = {};

    if (search.trim()) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { industry: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    const [companies, total] = await Promise.all([
      CompanyModel.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).lean(),
      CompanyModel.countDocuments(filter),
    ]);

    return listResponse(companies.map(toAdminRow), total, page, limit);
  }

  async update(id: string, payload: Partial<CompanyDto>) {
    return CompanyModel.findByIdAndUpdate(id, payload, { new: true, runValidators: true }).lean();
  }

  async delete(id: string) {
    return CompanyModel.findByIdAndDelete(id);
  }
}
