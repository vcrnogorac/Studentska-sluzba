package local.rps.student;

import java.util.List;
import java.util.stream.Collectors;

import local.rps.exam.Exam;

public class StudentDetails {
	private int id;
	private String indexNumber;
	private String firstname, lastname;
	private String sex;
	private List<Exam> successfulExams;
	private List<Exam> failedExams;
	private double averageGrade;
	
	public StudentDetails(Student s) {
		this.id = s.getId();
		this.indexNumber = s.getIndexNumber();
		this.firstname = s.getFirstname();
		this.lastname = s.getLastname();
		this.sex = s.getSex();
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

	public String getIndexNumber() {
		return indexNumber;
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
