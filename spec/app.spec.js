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
     app.create("text 1");
      app.create("text 2");
      it("there are no notes to list", function(){
        expect(app.listNotes()).toBe(true);
      });
	});
});
 describe("get", function(){
	it('should have get property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('get')).toBe(true);
		app.create("First input");
    app.create("Second input");
    it(" has to get a note with an index that exists", function(){
      expect(app.get(0)).toBe(true);
      expect(app.get("talk")).toBe(false);
    });
	});
});
	 describe("search", function(){
	it('should have search property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('_search')).toBe(true);
    app.create("input 1");
    it("should be a string", function(){
  expect(app._search("time")).toBe(true);
  expect(app._search(1)).toBeUndefined();
  expect(app._search()).toBeUndefined();
});
	});
});
	 describe("delete", function(){
	it('should have delete property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('_delete')).toBe(true);
     app.create("First time");
    app.create("Second time");
    it("the deleted note at index should exists", function(){
  expect(app._delete(0)).toBe(true);
  expect(app._delete("today")).toBe(false);
});
	});
});
	 describe("edit", function(){
	it('should have edit property', function(){
		expect(NotesApplication.prototype.hasOwnProperty('edit')).toBe(true);
    app.create("input 1");
      it(" update should be a string", function(){
    expect(app.edit(0, "edit text.")).toBe(true);
    expect(app.edit("edit text.")).toBe(false);
    expect(app.edit(1)).toBe(false);
    expect(app.edit()).toBe(false);
  });
	});
	});
});