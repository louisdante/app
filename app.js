var NotesApplication = function(author){

	this.author = author;
	this.notes = [];


}
NotesApplication.prototype.create(note_content){
		this.notes.push(note_content);
		
	}
NotesApplication.prototype.listNotes(){
		for (var i = 0; i < this.notes.length; i++) {
						
				console.log("note ID: " + i
			 	+ "\n"+ this.notes[i]+"\n\n"+"By Author " + this.author);
		}	
	}
NotesApplication.prototype.get(note_id){
		 
		 return this.notes[note_id];

		/* if (node_id == key){

		 	return note_content;
		 }else{

		 	console.log("id not found");
		 }*/
			
		

	}
NotesApplication.prototype._search(search_text){


		console.log("Showing results for search "+search_text);

		for(var i = 0; i < this.notes.length; i++){
			if(this.notes[i].search(search_text)){
				
				console.log("note ID: " + i
			 	+ "\n"+ this.notes[i]+"\n\n"+"By Author " + this.author);
			}
			
		}

	}
NotesApplication.prototype._delete(note_id){
	if(note_id > this.notes.length || note_id < 0){
		return "the number entered doesnt exit";
	}else{
		this.notes.splice(note_id);
		return "deleted";
	}

}
NotesApplication.prototype.edit(note_id,new_content ){
	this.notes[note_id] = new_content;
	}

