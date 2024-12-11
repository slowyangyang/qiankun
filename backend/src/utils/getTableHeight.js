export function getTableHeight() {
  let innerHeight = window.innerHeight
  let navHeight =
    document.querySelector('.layout_navbar')?.getBoundingClientRect().height ??
    0

  let breadcrumb =
    document.querySelector('.breadcrumb')?.getBoundingClientRect().height ?? 0

  let searchForm = document.querySelector('.search-form')?.offsetHeight ?? 0
  let mainBaseNav = document.querySelector('.mainBaseNav')?.offsetHeight ?? 0

  return (
    innerHeight -
    mainBaseNav -
    navHeight -
    breadcrumb -
    40 -
    47 -
    searchForm -
    80
  )
}
