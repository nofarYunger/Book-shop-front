const initialState = {
  books: [],
  // isOverlayOpen: false,
  // isPopoverOpen: false,
  filterBy: {keyWord:''},
};

export function bookReducer(state = initialState, action) {
  switch (action.type) {
    case "FILTER_BOOKS":
      return { ...state, filterBy: action.filter };
    case "UPD_BOOKS":
      return { ...state, books: action.updBooks };
    case "TOGGLE_OVERLAY":
      return { ...state, isOverlayOpen: !state.isOverlayOpen };
    case "SET_POPOVER_STATUS":
      return { ...state, isPopoverOpen: action.isPopover };
    default:
      return state;
  }
}
