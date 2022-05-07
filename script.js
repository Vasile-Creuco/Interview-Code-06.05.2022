var peoples = [];
var id = 0;
var id_button = 0;

function addPeople() {
	var name = document.getElementById('addInput').value;
	peoples[id] = name;
	document.getElementById("listPeople").innerHTML += peoples[id] + " " +
		'<button type = "button" id = ' + id + ' onclick = "deletePeople(this.id);">Delete</button>' + "<br><br>";
	++id;
}

function deletePeople(nr_button) {
	console.log('clicked');
	peoples.splice(nr_button, 1);
	document.getElementById('listPeople').innerHTML = "";
	for (let i = 0; i < peoples.length; ++i) {
		document.getElementById("listPeople").innerHTML += peoples[i] + " " +
			'<button type = "button" id = ' + i + ' onclick = "deletePeople(this.id);">Delete</button>' + "<br><br>";
	}
}
