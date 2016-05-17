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
	var notes:str =[];

	constructor(author){
		this.author =author;

	}
	create(note_content){
		this.notes = note_content;
	}
	listNotes(){
		
	}

}
	
