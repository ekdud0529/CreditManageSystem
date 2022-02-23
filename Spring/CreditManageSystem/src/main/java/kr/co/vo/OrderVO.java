package kr.co.vo;

public class OrderVO {
	private String preCourseId;
	private String preTitle;
	private String courseId;
	private String title;
	private int startYear;
	private int endYear;
	private boolean check;
	
	public String getPreCourseId() {
		return preCourseId;
	}
	public void setPreCourseId(String preCourseId) {
		this.preCourseId = preCourseId;
	}
	public String getPreTitle() {
		return preTitle;
	}
	public void setPreTitle(String preTitle) {
		this.preTitle = preTitle;
	}
	public String getCourseId() {
		return courseId;
	}
	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getStartYear() {
		return startYear;
	}
	public void setStartYear(int startYear) {
		this.startYear = startYear;
	}
	public int getEndYear() {
		return endYear;
	}
	public void setEndYear(int endYear) {
		this.endYear = endYear;
	}
	public boolean isCheck() {
		return check;
	}
	public void setCheck(boolean check) {
		this.check = check;
	}
	
	

}
