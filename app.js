/*var NotesApplication = function(){
	this.create = function(note_content){};
	this.listNotes = function(){};
	this.search = search(var search_text){

			console.log("Showing results for search ‘[<search_text>]’")
			console.log("Note ID: [note_id]");
			console.log("Note ID: [note_id]");
			console.log("Note ID: [note_id]");
		
	};
	this.delete = function(note_id){
		if (index > -1) {
    			array.splice(index, 1);
			}
	};
	this .edit = function edit(note_id, new_content){};
};
*/

class NotesApplication{
	var notes =[];

	constructor(author){
		this.author = author;

	}
	create(note_content){
		this.notes.push = note_content;
		this.author
	}
	listNotes(){
		for (var i = Things.length - 1; i >= 0; i--) {
			
		
			for (var i in notes) {
				console.log("note ID: " + note_id
			 	+ "\n"+ note_content+"\n\n"+"By Author "+this.author);
			}
		}	
	}
	get(note_id){
		 

		 if (node_id == key){

		 	return note_content;
		 }else{

		 	console.log("id not found");
		 }
			
		

	}
	search(search_text){


		console.log("Showing results for search '[<search_text>]'");
	}
	delete(note_id){}
	edit(note_id,new_content ){

	}

}
	
List<String> strList = new ArrayList<String>();
strList.add("23-2-2016");
strList.add("24-2-2016");
strList.add("25-2-2016");