var NotesApplication = function(){
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

/*class NotesApplication{
	var notes =[];

	constructor(author){
		this.author = author;

	}
	create(note_content){
		this.notes.push = note_content;
		this.author
	}
	listNotes(){
		for (var i = 0; i < notes.length; i++) {
						
				console.log("note ID: " + i
			 	+ "\n"+ notes[i]+"\n\n"+"By Author " + this.author);
		}	
	}
	get(note_id){
		 

		 if (node_id == key){

		 	return note_content;
		 }else{

		 	console.log("id not found");
		 }
			
		

	}
	_search(search_text){


		console.log("Showing results for search '[<search_text>]'");
	}
	_delete(note_id){}
	edit(note_id,new_content ){

	}

}*/
	
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



/*List<String> strList = new ArrayList<String>();
strList.add("23-2-2016");
strList.add("24-2-2016");
strList.add("25-2-2016");