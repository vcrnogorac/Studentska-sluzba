package local.rps.professor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import local.rps.course.Course;
import local.rps.course.CourseController;

@Service
public class ProfessorService {

	@Autowired
	ProfessorRepository professorRepository;

	@Autowired
	private CourseController courseController;

	public ProfessorService() {
	}

	public List<Professor> getAllProfessors() {
		return this.professorRepository.findAll();
	}

	public ProfessorDetails getProfessorDetailsById(int id) {
		Professor p = this.getProfessorById(id);
		ProfessorDetails pd = new ProfessorDetails(p);
		List<Course> courses = courseController.getCoursesByProfessorId(id);
		pd.setCourses(courses);
		return pd;
	}
	

	public Professor getProfessorById(int id) {
		return this.professorRepository.findById(id).get();
	}

	public void addProfessor(Professor professor) {
		this.professorRepository.save(professor);
	}
	
	public void updateProfessor(Professor professor) {
		this.professorRepository.save(professor);
	}
	
	public void deleteProfessorById(int id) {
		Professor s = this.getProfessorById(id);
		this.professorRepository.delete(s);
	}

}
