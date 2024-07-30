export default function getListStudentIds(arr) {
	let newarr = [];
	if (arr instanceof Array){
		newarr = arr.map((obj) => obj.id);
	}

	return newarr;
}
