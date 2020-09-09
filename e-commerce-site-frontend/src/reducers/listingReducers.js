import { LISTINGS_REQUEST,
        LISTINGS_SUCCESS,
        LISTINGS_FAIL,
        LISTING_DETAILS_REQUEST,
        LISTING_DETAILS_SUCCESS,
        LISTING_DETAILS_FAIL } from "../constants/listingConstants";

function listingsReducer(state={listings: []}, action) {
  switch (action.type) {
    case LISTINGS_REQUEST:
      return { loading: true };
    case LISTINGS_SUCCESS: 
      return { loading: false, listings: action.payload };
    case LISTINGS_FAIL: 
      return { loading: false, error: action.payload };
    default: 
      return state;
  }
}

function listingDetailsReducer(state={listing: {}}, action) {
  switch (action.type) {
    case LISTING_DETAILS_REQUEST:
      return { loading: true };
    case LISTING_DETAILS_SUCCESS: 
      return { loading: false, listing: action.payload };
    case LISTING_DETAILS_FAIL: 
      return { loading: false, error: action.payload };
    default: 
      return state;
  }
}

export { listingsReducer, listingDetailsReducer }