package local.rps.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import local.rps.exam.Exam;
import local.rps.exam.ExamController;

@Service
public class CourseService {
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	ExamController examController;
	
	public CourseService() {
		super();
	}

	public List<Course> getAllCourses(){
		return courseRepository.findAll();
	}
	
	public CourseDetails getCourseById(int id) {
		Course c = courseRepository.findById(id).get();
		CourseDetails cd = new CourseDetails(c);
		List<Exam> exams = examController.getAllExamsByCourseId(c.getId());
		cd.setExams(exams);
		return cd;
	}
	
	public List<Course> getAllCoursesByProfessorId(int id){
		return this.courseRepository.findByProfessorId(id);
	}
	
	public void addCourse(Course course) {
		courseRepository.save(course);
	}

	public void updateCourse(Course course) {
		courseRepository.save(course);
	}

	public void deleteCourseById(int id) {
		courseRepository.deleteById(id);
	}
	
	public void deleteCourse(Course course) {
		courseRepository.delete(course);
	}

}
