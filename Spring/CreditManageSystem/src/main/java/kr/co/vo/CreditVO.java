package kr.co.vo;

public class CreditVO {
	private String student_id;
	private String code;
	private String name;
	private int total;
	
	public CreditVO() {}
	
	public CreditVO(String student_id, String code, String name, int total) {
		this.student_id = student_id;
		this.code = code;
		this.name = name;
		this.total = total;
	}
	
	public String getStudent_id() {
		return student_id;
	}
	public void setStudent_id(String student_id) {
		this.student_id = student_id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
}
