Template.postId.helpers({
	rightPhase() {
		if(this.phase != 20){
			return true;
		}
		return false;
	}
});