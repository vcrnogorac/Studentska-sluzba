package local.rps.course;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import local.rps.professor.Professor;

@Entity
public class Course {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String courseCode;
	private int ECTS;
	@ManyToOne
	private Professor professor;

	public Course(int id, String courseCode, String name, int ECTS) {
		super();
		this.id = id;
		this.courseCode = courseCode;
		this.name = name;
		this.ECTS = ECTS;
	}

	public Course() {
		
	}

	public String getCourseCode() {
		return courseCode;
	}

	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getECTS() {
		return ECTS;
	}

	public void setECTS(int eCTS) {
		ECTS = eCTS;
	}

	public Professor getProfessor() {
		return professor;
	}

	public void setProfessor(Professor professor) {
		this.professor = professor;
	}

	
}
