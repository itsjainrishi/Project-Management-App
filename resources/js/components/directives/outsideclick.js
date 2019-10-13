export default {
	bind (el, binding, vnode) {
		const { handler, exclude, condition } = binding.value
		el.handleOutsideClick = (e) => {
			e.stopPropagation()

			let clickedOnExcludedEl = false
			exclude.forEach(refName => {
				if (!clickedOnExcludedEl) {
					const excludedEl = refName;
					clickedOnExcludedEl = excludedEl.contains(e.target)
				}
			})
			if (!el.contains(e.target) && !clickedOnExcludedEl) {
				vnode.context[handler]()
			}
		}
		document.addEventListener('click', el.handleOutsideClick)		
	},

	unbind (el) {
		document.removeEventListener('click', el.handleOutsideClick)
	}
}