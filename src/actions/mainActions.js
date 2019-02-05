const CLICK_ARTICLE = 'CLICK_ARTICLE';

const setNewOffsetY = offsetY => ({
  type: CLICK_ARTICLE,
  payload: { offsetY },
});

export {
  CLICK_ARTICLE,
  setNewOffsetY,
};
