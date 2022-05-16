package local.rps.exam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import local.rps.course.Course;
import local.rps.student.Student;

@RestController
@CrossOrigin(origins = "*")
public class ExamController {
	
	@Autowired
	ExamService examService;
	
	@RequestMapping("/exams")
	public List<Exam> getAllExams() {
		return examService.getAllExams();
	}
	
	@RequestMapping("/exams/{id}")
	public Exam getExamById(@PathVariable int id) {
		return examService.getExamById(id);
	}
	
	@RequestMapping("/exams/byGrade/{grade}")
	public List<Exam> getExamsByGrade(@PathVariable int grade) {
		return examService.getAllExamsByGrade(grade);
	}
	
	@RequestMapping("/students/{id}/exams")
	public List<Exam> getAllExamsByStudenId(@PathVariable int id) {
		return examService.getAllExamsByStudentId(id);
	}
	
	@RequestMapping("/courses/{id}/exams")
	public List<Exam> getAllExamsByCourseId(@PathVariable int id) {
		return examService.getAllExamsByCourseId(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value= "/students/{studentId}/courses/{courseId}/exams")
	public void addExamByStudenId(@PathVariable int studentId, @PathVariable int courseId, @RequestBody Exam exam) {
		exam.setStudent(new Student(studentId, "", "", "", ""));
		exam.setCourse(new Course(courseId, "", "", 0));
		examService.addExam(exam);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value= "/students/{studentId}/courses/{courseId}/exams")
	public void updateExam(@PathVariable int studentId, @PathVariable int courseId, @RequestBody Exam exam) {
		exam.setStudent(new Student(studentId, "", "", "", ""));
		exam.setCourse(new Course(courseId, "", "", 0));
		examService.updateExam(exam);
	}
	
	@RequestMapping(method =  RequestMethod.DELETE, value = "/exams/{id}")
	public void deleteExamById(@PathVariable int id) {
		examService.deleteExamById(id);
	}
	
	@RequestMapping(method =  RequestMethod.DELETE, value = "/exams")
	public void deleteExam(@RequestBody Exam exam) {
		examService.deleteExam(exam);
	}
}
