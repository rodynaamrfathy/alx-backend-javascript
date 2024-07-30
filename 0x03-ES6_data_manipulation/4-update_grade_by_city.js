export default function updateStudentGradeByCity(students, city, newGrades) {
    	
	if (students instanceof Array){
		return students
			.filter((student) => student.location === city)
			.map((student) => {
				const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
				student.grade = studentGrade ? studentGrade.grade : 'N/A';	
				return student;
			});
			
	}

	return [];
}

