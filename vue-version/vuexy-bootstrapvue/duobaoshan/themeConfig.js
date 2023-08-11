// Theme Colors
// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
export const $themeColors = {}

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {}
// 用户主题设置
// APP CONFIG
export const $themeConfig = {
  app: {
    appName: 'Vuexy', // Will update name in navigation menu (Branding)
    // eslint-disable-next-line global-require
    appLogoImage: require('@/assets/images/logo/logo.svg'), // Will update logo in navigation menu (Branding)
  },
  layout: {
    isRTL: false,
    skin: 'light', // light, dark, bordered, semi-dark
    routerTransition: 'zoom-fade', // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
    type: 'vertical', // vertical, horizontal
    contentWidth: 'full', // full, boxed
    // 显示垂直侧边栏
    menu: {
      hidden: true,
      isCollapsed: false,
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: 'hidden', // static , sticky , floating, hidden
      backgroundColor: 'primary', // BS color options [primary, success, etc]
    },
    footer: {
      type: 'hidden', // static, sticky, hidden
    },
    customizer: true,
    enableScrollToTop: true,
  },
}