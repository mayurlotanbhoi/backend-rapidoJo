import { formatDate, toAdminRow } from "../../../shared/utils/admin-format";
import { ApplicationDto } from "../dto/application.dto";
import ApplicationModel from "../model/model";

const normalizeApplication = (row: any) => ({
  ...toAdminRow(row),
  appliedDate: row.appliedDate || formatDate(row.createdAt),
});

export class ApplicationRepository {
  async create(payload: ApplicationDto) {
    return ApplicationModel.create({
      ...payload,
      appliedDate: payload.appliedDate || formatDate(new Date()),
    } as any);
  }

  async list() {
    const applications = await ApplicationModel.find().sort({ createdAt: -1 }).lean();
    return applications.map(normalizeApplication);
  }

  async update(id: string, payload: Partial<ApplicationDto>) {
    const application = await ApplicationModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    return application ? normalizeApplication(application) : null;
  }

  async delete(id: string) {
    return ApplicationModel.findByIdAndDelete(id);
  }
}
