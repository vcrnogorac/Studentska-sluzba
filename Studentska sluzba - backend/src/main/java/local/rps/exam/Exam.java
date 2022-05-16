package local.rps.exam;


import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import local.rps.course.Course;
import local.rps.student.Student;

@Entity
public class Exam {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int grade;
	private Date date;
	@ManyToOne
	private Course course;
	@ManyToOne
	private Student student;
	
	public Exam (int id, int grade, String date) {
		this.id = id;
		this.grade = grade;

		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
		    this.date = (Date) dateFormat.parse(date);
		} 
		catch (ParseException e) {
		    e.printStackTrace();
		}
		
	}
	
	public Exam() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

}
