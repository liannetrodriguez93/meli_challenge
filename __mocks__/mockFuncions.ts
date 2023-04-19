export const getMockedModal = () => {
  return jest.mock('react-modal', () => {
    const originalModal = jest.requireActual('react-modal');
    return {
      ...originalModal,
      setAppElement: jest.fn(),
    };
  });
};
