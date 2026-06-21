import { ApiResponse } from "../../../shared/response/api-response";
import { toAdminRow } from "../../../shared/utils/admin-format";
import { AISessionDto, PromptTemplateDto } from "../dto/ai.dto";
import { AIRepository } from "../repository/ai.repository";

export class AIService {
  private repository = new AIRepository();

  async createSession(payload: AISessionDto) {
    const session = await this.repository.createSession(payload);
    return new ApiResponse(true, "AI session created successfully", toAdminRow(session.toObject()));
  }

  async listSessions() {
    const sessions = await this.repository.listSessions();
    return new ApiResponse(true, "AI sessions fetched successfully", sessions);
  }

  async createTemplate(payload: PromptTemplateDto) {
    const template = await this.repository.createTemplate(payload);
    return new ApiResponse(true, "Prompt template created successfully", toAdminRow(template.toObject()));
  }

  async listTemplates() {
    const templates = await this.repository.listTemplates();
    return new ApiResponse(true, "Prompt templates fetched successfully", templates);
  }

  async updateTemplate(id: string, payload: Partial<PromptTemplateDto>) {
    const template = await this.repository.updateTemplate(id, payload);
    return new ApiResponse(true, "Prompt template updated successfully", template);
  }
}
