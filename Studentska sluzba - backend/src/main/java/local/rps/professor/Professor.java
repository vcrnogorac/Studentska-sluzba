package local.rps.professor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Professor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstname, lastname;
	private String sex;
	private String academicTitle;
	
	public Professor(int id, String firstname, String lastname, String sex, String academicTitle) {
		super();
		this.id = id;
		this.academicTitle = academicTitle;
		this.firstname = firstname;
		this.lastname = lastname;
		this.sex = sex;
		/*
		if(sex != "M" && sex != "m" && sex != "Z" && sex != "z")
			throw new Exception("Pol studenta nije korektan");
		if(sex == "M" || sex == "m")
			this.sex = "M";
		else
			this.sex = "Z";
		*/
	}
	
	public Professor() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getAcademicTitle() {
		return academicTitle;
	}

	public void setAcademicTitle(String academicTitle) {
		this.academicTitle = academicTitle;
	}

}
