export interface CreateLessonData {
  title: string;
  description?: string;
}

export interface LessonsRepository {
  create(data: CreateLessonData): Promise<void>
}