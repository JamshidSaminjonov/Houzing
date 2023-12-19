export const uzeReplace = (query, value) => {
  //key va velyu oladi
  let url = new URL(window.location.href);
  url.searchParams.set(query, value);
  if (!value && value !== 0)
    //bu holatda value false buldsa va items 0ga teng bulmasa chunki 0 ham bazida qiymat vazifasini bildiradi
    url.searchParams.delete(query);
  return url.search;
};
