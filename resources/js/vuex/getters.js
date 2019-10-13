export default {
	isAuthenticated: state => !!state.token,
	isVerified: state => !!state.verifiedAt,
}