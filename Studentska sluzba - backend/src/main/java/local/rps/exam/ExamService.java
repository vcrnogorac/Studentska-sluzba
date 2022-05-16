package local.rps.exam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExamService {
	
	@Autowired
	ExamRepository examRepository;
	
	public ExamService() {
		super();
	}

	public List<Exam> getAllExams(){
		return examRepository.findAll();
	}
	
	public Exam getExamById(int id) {
		return examRepository.findById(id).get();
	}
	
	public List<Exam> getAllExamsByStudentId(int id){
		return this.examRepository.findByStudentId(id);
	}
	
	public List<Exam> getAllExamsByCourseId(int id){
		return this.examRepository.findByCourseId(id);
	}
	
	public void addExam(Exam exam) {
		examRepository.save(exam);
	}

	public void updateExam(Exam exam) {
		examRepository.save(exam);
	}

	public void deleteExamById(int id) {
		examRepository.deleteById(id);
	}
	
	public void deleteExam(Exam exam) {
		examRepository.delete(exam);
	}
	
	public List<Exam> getAllExamsByGrade(int grade){
		return examRepository.getAllExamsByGrade(grade);
	}
	

}
