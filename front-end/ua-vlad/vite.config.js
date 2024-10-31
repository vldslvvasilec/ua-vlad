import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Загружаем переменные окружения из файла .env, который находится на два уровня выше
dotenv.config({ path: '../../.env' });

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true, // Включаем разделение CSS для более эффективной загрузки
    minify: 'terser', // Включаем минификацию для продакшена
    rollupOptions: {
      output: {
        // Указываем, как создавать имена файлов
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && (assetInfo.name.endsWith('.css') || assetInfo.name.endsWith('.css.map'))) {
            return 'assets/[name].[hash][extname]'; // Добавляем хэш для кэширования
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Настройки для компилятора SCSS
      },
    },
  },
});
