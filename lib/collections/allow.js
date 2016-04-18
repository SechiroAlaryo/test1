Meteor.users.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        if (userId && _.difference(fields,["username","firstname","lastname","chief"]).length === 0) {
      		return true;
    	}
    },
    remove: function (userId, doc) {
        return false;
    }
});

Meteor.users.deny({

});



/*Exemple:
var whitelist = ["body"];

Messages.allow({
  update: function (userId, doc, fields, modifier) {
    if (userId && _.difference(fields, ["username","firstname","lastname","chief"]).length === 0) {
      return true;
    }
  }
});
*/