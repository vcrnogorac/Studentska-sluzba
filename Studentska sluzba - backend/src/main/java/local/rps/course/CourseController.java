package local.rps.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import local.rps.professor.Professor;

@RestController
@CrossOrigin(origins = "*")
public class CourseController {
	
	@Autowired
	CourseService courseRepository;
	
	@RequestMapping("/courses")
	public List<Course> getAllCourses() {
		return courseRepository.getAllCourses();
	}
	
	@RequestMapping("/courses/{id}")
	public CourseDetails getCourseById(@PathVariable int id) {
		return courseRepository.getCourseById(id);
	}
	
	@RequestMapping("/professors/{id}/courses")
	public List<Course> getCoursesByProfessorId(@PathVariable int id) {
		return courseRepository.getAllCoursesByProfessorId(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value= "/professors/{id}/courses")
	public void addCourseByProfessorId(@PathVariable int id, @RequestBody Course course) {
		course.setProfessor(new Professor(id, "", "", "", ""));
		courseRepository.addCourse(course);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value= "/professors/{id}/courses")
	public void updateCourse(@PathVariable int id, @RequestBody Course course) {
		course.setProfessor(new Professor(id, "", "", "", ""));
		courseRepository.updateCourse(course);
	}
	
	@RequestMapping(method =  RequestMethod.DELETE, value = "/courses/{id}")
	public void deleteCourseById(@PathVariable int id) {
		courseRepository.deleteCourseById(id);
	}
	
	@RequestMapping(method =  RequestMethod.DELETE, value = "/courses")
	public void deleteCourse(@RequestBody Course course) {
		courseRepository.deleteCourse(course);
	}
}
