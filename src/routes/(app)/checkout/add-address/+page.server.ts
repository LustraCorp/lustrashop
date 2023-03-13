import { AddressService, CountryService } from '$lib/services'

export const prerender = false

export async function load({ cookies, locals, params, url }) {
	const { store } = locals
	const id = url.searchParams.get('id')
	// const prescriptionId = url.searchParams.get('prescription')
	let address = {}
	let countries = []
	let states = []

	if (id === 'new') {
		address = { id: 'new', country: null, state: null }
	} else {
		address = await AddressService.fetchAddress({
			id,
			storeId: locals.store?.id,
			server: true,
			sid: cookies.get('sid')
		})
	}

	countries = await CountryService.fetchCountries({
		storeId: locals.store?.id,
		server: true,
		sid: cookies.get('sid')
	})

	if (address?.country) {
		states = await CountryService.fetchStates({
			storeId: locals.store?.id,
			server: true,
			sid: cookies.get('sid'),
			countryCode: address?.country
		})
	}

	return { address, countries, states }
}
