import { AbilityBuilder } from '@casl/ability'
import store from './vuex/store';

var user = {}

function subjectName(item) {
	user = store.state.authUser

	if (!item || typeof item === 'string' || !user) {
		return item
	}
	else if(item.owner_id === user.id){
		return 'Project'
	}
}

export default AbilityBuilder.define({ subjectName }, can => {
	if(user) can(['manage'], 'Project')
})