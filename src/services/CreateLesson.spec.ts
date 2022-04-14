import { InMemoryLessonsRepository } from "../../test/repositories/InMemoryLessonsRepository";
import { CreateLesson } from "./CreateLesson"

describe('CreateLesson service', () => {
  it('should be able to create a new lesson', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository()
    const createLesson = new CreateLesson(inMemoryLessonsRepository);
  
    await expect(createLesson.execute({ title: 'Nova aula' }))
      .resolves
      .not
      .toThrow()
  
    expect(inMemoryLessonsRepository.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Nova aula'
        })
      ])
    )
  })

  it('should NOT be able to create a new lesson with invalid title', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository()
    const createLesson = new CreateLesson(inMemoryLessonsRepository);
  
    await expect(createLesson.execute({ title: '' }))
      .rejects
      .toThrow()
  
    expect(inMemoryLessonsRepository.items).toEqual([])
  })
})