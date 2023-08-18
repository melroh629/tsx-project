import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: '/tsx-project/', // GitHub Pages 배포할 때의 저장소 이름에 맞게 설정해주세요
	build: {
		outDir: 'build',
	},
});
