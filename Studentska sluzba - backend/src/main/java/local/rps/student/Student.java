package local.rps.student;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String indexNumber;
	private String firstname, lastname;
	private String sex;
	
	public Student(int id, String indexNumber, String firstname, String lastname, String sex) {
		super();
		this.id = id;
		this.indexNumber = indexNumber;
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
	
	public Student() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getIndexNumber() {
		return indexNumber;
	}

	public void setIndexNumber(String indexNumber) {
		this.indexNumber = indexNumber;
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

	
}
