package local.rps.course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {
	public List<Course> findByProfessorId(int id);
}
