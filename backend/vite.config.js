import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// import { fileURLToPath, URL } from 'node:url'
// 引入svg依赖插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // 引入 svg 图标所需要的插件
// 引入mock
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const { VITE_QIANKUN_BASE_URL, VITE_USER_NODE_ENV } = loadEnv(
    mode,
    process.cwd(),
  )
  console.log(loadEnv(mode, process.cwd()))
  return {
    base: VITE_USER_NODE_ENV === 'production' ? '//127.0.0.1:8082/' : './',
    server: {
      port: 57013,
      cors: true,
    },
    plugins: [
      vue(),
      qiankun('micro-backend', {
        // 配置qiankun插件
        useDevMode: true,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // 图标的存放目录
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 引入 variable.scss 这样就可以在全局中使用 variable.scss中预定义的变量了
          // 给导入的路径最后加上 ;
          additionalData:
            '@use "@/styles/element/index.scss" as *; @use "@/styles/variable.scss";',
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  }
})
