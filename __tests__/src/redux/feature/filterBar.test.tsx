import filterBarSlice, {
  FilterBarState,
  setOpenFilterBar,
} from '@reduxConfig/feature/filterBar/filterBarSlice';

describe('filterBarSlice', () => {
  let initialState: FilterBarState;

  beforeEach(() => {
    initialState = {
      open: false,
    };
  });

  test('should return the initial state', () => {
    expect(filterBarSlice(undefined, {} as any)).toEqual(initialState);
  });

  test('should handle setOpenFilterBar', () => {
    const previousState: FilterBarState = {
      open: false,
    };

    const expectedState: FilterBarState = {
      open: true,
    };

    expect(filterBarSlice(previousState, setOpenFilterBar())).toEqual(
      expectedState
    );

    expect(filterBarSlice(expectedState, setOpenFilterBar())).toEqual(
      previousState
    );
  });
});
