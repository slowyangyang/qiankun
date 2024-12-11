const modules = import.meta.glob('../views/**/*.vue')
const layout = import.meta.glob('../layout/**/*.vue')

// export default function getRoutes(menuList) {
//   for (const menu of menuList) {
//     if (menu.children && menu.children.length) {
//       if (menu.meta.showChildren) {
//         menu.component = layout[`../layout/${menu.component}.vue`]
//       } else {
//         menu.component = modules[`../views/${menu.component}.vue`]
//       }
//       getRoutes(menu.children)
//     } else {
//       menu.component = modules[`../views/${menu.component}.vue`]
//     }
//   }
//   return menuList
// }
export default function getRoutes(menuList) {
  for (const menu of menuList) {
    if (menu.children && menu.children.length) {
      if (menu.meta.showChildren) {
        menu.component = null
      } else {
        menu.component = modules[`../views/${menu.component}.vue`]
      }
      getRoutes(menu.children)
    } else {
      menu.component = modules[`../views/${menu.component}.vue`]
    }
  }
  return menuList
}
