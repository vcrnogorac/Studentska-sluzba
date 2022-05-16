package local.rps.course;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import local.rps.exam.Exam;
import local.rps.exam.ExamController;
import local.rps.professor.Professor;

public class CourseDetails {
	
	private int id;
	private String name;
	private String courseCode;
	private int ECTS;
	private Professor professor;
	private List<Exam> successfulExams;
	private List<Exam> failedExams;
	private double averageGrade;
	
	public CourseDetails(Course course) {
		this.id = course.getId();
		this.name = course.getName();
		this.courseCode = course.getCourseCode();
		this.ECTS = course.getECTS();
		this.professor = course.getProfessor();
	}
	
	public void setExams(List<Exam> allExam) {
		failedExams = allExam.stream()
	                         .filter(exam -> exam.getGrade() == 5)
	                         .collect(Collectors.toList());
		successfulExams = allExam.stream()
	                             .filter(exam -> exam.getGrade() > 5)
	                             .collect(Collectors.toList());
		int s = successfulExams.stream().mapToInt(e -> e.getGrade()).sum();
		averageGrade = 0;
		if(s > 0)
			averageGrade = (s + 0.0) / successfulExams.size();
	}
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getCourseCode() {
		return courseCode;
	}

	public int getECTS() {
		return ECTS;
	}

	public Professor getProfessor() {
		return professor;
	}

	public List<Exam> getSuccessfulExams() {
		return successfulExams;
	}

	public List<Exam> getFailedExams() {
		return failedExams;
	}

	public double getAverageGrade() {
		return averageGrade;
	}
	
	
}
