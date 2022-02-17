package kr.co.vo;

public class signUpVO {

	private	String studentId;
	private String name;
	private String password;

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "MemberVO [studentId=" + studentId + ", name=" + name + ", pw=" + password + "]";
	}
	
}
