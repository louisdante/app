/*Array.prototype.notes = function(){

};
describe('array input', function(){
	it('should be an array' ,  function()){
		expect([""].notes()).toBe([]);

	}
});
it('is should be able to search ',function(){
	search('string').done(function(result) {
        expect(result.length).toBeGreaterThan(1); //true
        console.log(result.lenght);
    });
});
it('Should create note', function(){
		expect(typeof list_content.id).toBeNumber();
	});
it('Should List Note', function(){
		expect(('Note ID: 1 /n Yatzee /n By Author').list()).toBetrue();
	});
it('Should get note_id',function(){
		expect((typeof note_id).get()).toBeNumber();
	});

});
*/


/*
 describe("_search", function(){
   app.create("First time");
    app.create("Second time");
    it("should be a string", function(){
  expect(app._search("time")).toBe(true);
  expect(app._search(1)).toBeUndefined();
  expect(app._search()).toBeUndefined();
});
  });

  describe("delete", function(){
    app.create("First time");
    app.create("Second time");
    it("the deleted note at index should exists", function(){
  expect(app._delete(0)).toBe(true);
  //expect(app._delete("today")).toBe(false);
});
  });

  describe("get", function(){
  z.create("First time");
    z.create("Second time");
    it(" has to get a note with an index that exists", function(){
      expect(app.get(0)).toBe(true);
      expect(app.get("talk")).toBe(false);
    });
  });

    describe("edit", function(){
      app.create("First time");
      app.create("Second time");
      it("content to update should be a string", function(){
    expect(app.edit(0, "time to edit.")).toBe(true);
    expect(app.edit("time to edit.")).toBe(false);
    expect(app.edit(1)).toBe(false);
    expect(app.edit()).toBe(false);
  });
    });

    describe("listNotes", function(){
      app.create("First time");
      app.create("Second time");
      app.create("Third time");
      it("there are no notes to list", function(){
        expect(app.listNotes()).toBe(true);
      });
    });



*/
/*describe('Notes Application', function(){
	var app = new NotesApplication("louis");

	it("input is not a number", function(){
  expect(typeof app.author).toBe(typeof "string");
});

it('should have create property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('create')).toBe(true);
	});

it('should have listNotes property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('listNotes')).toBe(true);
	});
	it('should have get property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('get')).toBe(true);
		
	});
	it('should have search property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('_search')).toBe(true);
	});
	it('should have delete property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('_delete')).toBe(true);
	});
	it('should have edit property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('edit')).toBe(true);
	});
});*/





describe("THe NotesApp ", function()
{

var app = new NotesApplication("louis");

it("should author be undefined", function(){
expect(app.author).toBeDefined();
});

it("input is not a number", function(){
  expect(typeof app.author).toBe(typeof "string");
});

  describe("create", function(){
    it("should only be a string", function(){
  expect(app.create("This is a text.")).toBe("created");
});
  });
  describe("listNotes", function(){ 
it('should have listNotes property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('listNotes')).toBe(true);
	});
});
 describe("get", function(){
	it('should have get property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('get')).toBe(true);
		
	});
});
	 describe("search", function(){
	it('should have search property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('_search')).toBe(true);
	});
});
	 describe("delete", function(){
	it('should have delete property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('_delete')).toBe(true);
	});
});
	 describe("edit", function(){
	it('should have edit property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('edit')).toBe(true);
	});
	});
});