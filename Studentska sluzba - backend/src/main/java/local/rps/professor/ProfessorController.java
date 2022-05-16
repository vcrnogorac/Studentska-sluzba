package local.rps.professor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import local.rps.course.Course;
import local.rps.course.CourseController;

@RestController
@CrossOrigin(origins = "*")
public class ProfessorController {
	
	@Autowired
	ProfessorService professorService;

	@RequestMapping("/professors")
	public List<Professor> getAllProfessors() {
		return professorService.getAllProfessors();
	}
	
	@RequestMapping("professors/{id}")
	public ProfessorDetails getProfessorDetailsById(@PathVariable int id) {
		ProfessorDetails p = professorService.getProfessorDetailsById(id);
		return p;
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/professors")
	public void addProfessor(@RequestBody Professor professor) {
		professorService.addProfessor(professor);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/professors")
	public void updateProfessor(@RequestBody Professor professor) {
		 professorService.updateProfessor(professor);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/professors/{id}")
	public void deleteProfessorById(@PathVariable int id) {
		professorService.deleteProfessorById(id);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/professors")
	public void deleteProfessor(@RequestBody Professor professor) {
		professorService.deleteProfessorById(professor.getId());
	}
}
