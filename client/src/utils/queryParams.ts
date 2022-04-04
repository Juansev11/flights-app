export const getUrlQueryParams = () => {
  const urlQueryString = window.location.search;
  const urlSearchParams = new URLSearchParams(urlQueryString);
  const urlSearchParamsAsObject = Object.fromEntries(urlSearchParams);
  return urlSearchParamsAsObject;
};

export const appendUrlQueryParam = (queryStringToAppend = {}) => {
  const oldUrlParams = Object.fromEntries(new URLSearchParams(window.location.search));
  const urlParams = new URLSearchParams({
    ...oldUrlParams,
    ...queryStringToAppend,
  });
  const url = new URL(window.location.href);

  window.history.replaceState(null, '', `${url.pathname}?${urlParams}`);
};
