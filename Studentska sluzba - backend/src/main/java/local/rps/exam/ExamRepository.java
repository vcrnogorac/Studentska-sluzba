package local.rps.exam;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ExamRepository extends JpaRepository<Exam, Integer> {

	public List<Exam> findByStudentId(int id);
	public List<Exam> findByCourseId(int id);
	
	@Query("FROM Exam WHERE ocjena = ?1")
	public List<Exam> getAllExamsByGrade(int grade);
	
	/*
    @Query(value = "SELECT * FROM Exam WHERE grade = :grade", nativeQuery = true)
    public List<SkiResort> mySecondGetAllExamsByGrade(@Param("grade") int grade);
	 */

}
