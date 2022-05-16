package local.rps.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import local.rps.course.Course;
import local.rps.course.CourseDetails;
import local.rps.exam.Exam;
import local.rps.exam.ExamController;

@Service
public class StudentService {

	@Autowired
	StudentRepository studentRepository;
	
	@Autowired
	ExamController examController;

	public StudentService() {
	}

	public List<Student> getAllStudents() {
		return this.studentRepository.findAll();
	}

	public StudentDetails getStudentById(int id) {
		Student s = this.studentRepository.findById(id).get();
		StudentDetails sd = new StudentDetails(s);
		List<Exam> exams = examController.getAllExamsByStudenId(id);
		sd.setExams(exams);
		return sd;
	}

	public List<Student> getStudentByIndexNumber(String indexNumber) {
		return this.studentRepository.findByIndexNumber(indexNumber);
	}

	public void addStudent(Student student) {
		this.studentRepository.save(student);
	}
	
	public void updateStudent(Student student) {
		this.studentRepository.save(student);
	}

	public void deleteStudentById(int id) {
		StudentDetails s = this.getStudentById(id);
		this.studentRepository.deleteById(s.getId());	
	}
	
	public void deleteStudent(Student student) {
		this.studentRepository.delete(student);	
	}

}
