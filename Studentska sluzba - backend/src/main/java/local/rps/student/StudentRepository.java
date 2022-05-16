package local.rps.student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository <Student, Integer> {
	public List<Student> findByIndexNumber(String indexNumber);

}
