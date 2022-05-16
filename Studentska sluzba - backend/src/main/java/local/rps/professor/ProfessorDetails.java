package local.rps.professor;

import java.util.List;

import local.rps.course.Course;

public class ProfessorDetails {
	private int id;
	private String firstname, lastname;
	private String sex;
	private String academicTitle;
	private List<Course> courses;
	
	public ProfessorDetails(Professor professor) {
		this.id = professor.getId();
		this.firstname = professor.getFirstname();
		this.lastname = professor.getLastname();
		this.sex = professor.getSex();
		this.academicTitle = professor.getAcademicTitle();
	}

	public int getId() {
		return id;
	}

	public String getFirstname() {
		return firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public String getSex() {
		return sex;
	}

	public String getAcademicTitle() {
		return academicTitle;
	}

	public List<Course> getCourses() {
		return courses;
	}
	
	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}

}
