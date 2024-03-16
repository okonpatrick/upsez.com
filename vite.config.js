import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  assert: {
    include: [
      '**/*.jpg',
      '**/*.png',
      '**/*.gif',
      // Add other image file types as needed
    ]
  }
>>>>>>> 842b8eaeed5240638b9f1b163a43906b06c4e5c5
})
