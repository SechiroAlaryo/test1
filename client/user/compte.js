Template.compte.events({
  'submit form': function(e) {
    e.preventDefault();

    //On recherche les données dans le template
    var username = $('input[name="username"]').val();
    /*var email = $('input[name="email"]').val();*/
    var firstname = $('input[name="firstname"]').val();
    var lastname = $('input[name="lastname"]').val();
    var chief = $('input[name="chief"]').val();

    var compteProperties = {
      username:username,
      /*email:email,*/
      firstname:firstname,
      lastname: lastname,
      chief:chief
    }

    Meteor.users.update(
      Meteor.userId(), 
      {$set:
        {'username':username/*,'emails':email*/,'firstname':firstname,'lastname':lastname,'chief':chief} },
        function(error) {
      if (error) {
        alert(error.reason);
      }
      else{
        Router.go('home');
      }
    })
  }
});
