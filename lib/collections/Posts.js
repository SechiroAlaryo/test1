Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

Posts.deny({
    update: function (userId, doc, fields, modifier) {
        var user = Meteor.users.findOne({_id:userId});
        if( (user.username === doc.author)&&(_.difference(["content","valid"],fields).length !== 2) ){
            return true;
        }
        if (_.difference(["phase","createdAt"],fields).length !== 2) {
            return true;
        }
        if (doc.phase == 20){
            return true;
        }
    },
});

Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Titre", // J'en profite également pour modifier le label à afficher
        max: 200
    },
    author: {
        type: String,
        label: "Auteur",
        max: 200,
        autoValue: function(){
            if(this.isInsert){
                return Meteor.user().username;
            }
        }
    },
    validator: {
        type: String,
        label: "validator",
        autoValue: function(){
            if(this.isInsert){
                return Meteor.user().chief;
            }
        },
        autoform: { // Ne doit pas apparaitre dans le formulaire
            omit: true
        }
    },
    content: {
        type: String,
        label: "Contenu",
        max: 2000,
        autoform: {
            afFieldInput: { // Modification du champs dans le formulaire
                type: "textarea",
                rows: 10
            }
        }
    },
    commentAuthor:{
        type: String,
        max: 2000,
        optional: true
    },
    commentValidator:{
        type: String,
        max: 2000,
        optional: true
    },
    valid:{
        type: String,
        optional: true,
        allowedValues:['valide','non valide','non décidé']
    },
    phase:{
        type: Number,
        optional:true,
    },
    createdAt: {
        type: Date,
        denyUpdate: true,
        autoValue: function(){
            if(this.isInsert){
                return new Date;
            }
            else if(this.isUpsert){
                return {$setOnInsert: new Date};
            }
            else{
                this.unset();
            }
        },
        autoform: { // Ne soit pas apparaitre dans le formulaire
            omit: true
        }
    }
}));