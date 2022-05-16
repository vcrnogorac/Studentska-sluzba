package local.rps.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class StudentController {
	
	@Autowired
	StudentService studentService;

	@RequestMapping("/students")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	
	@RequestMapping("students/{id}")
	public StudentDetails getStudentById(@PathVariable int id) {
		return studentService.getStudentById(id);
	}
	
	@RequestMapping("students/{indexNumber}/{year}")
	public List<Student> getStudentByIndexNumber(@PathVariable String indexNumber, @PathVariable String year) {
		indexNumber += "/" + year;
		return studentService.getStudentByIndexNumber(indexNumber);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/students")
	public void addStudent(@RequestBody Student student) {
		studentService.addStudent(student);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/students")
	public void updateStudent(@RequestBody Student student) {
		 studentService.updateStudent(student);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/students/{id}")
	public void deleteStudentById(@PathVariable int id) {
		studentService.deleteStudentById(id);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/students")
	public void deleteStudent(@RequestBody Student student) {
		studentService.deleteStudent(student);
	}
}
