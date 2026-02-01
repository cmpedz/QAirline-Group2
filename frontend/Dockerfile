# frontend/Dockerfile
# Bước 1: Build source code - Dùng Node 20 để thỏa mãn yêu cầu của Vite
FROM node:20-alpine as build-stage

WORKDIR /app

# Copy package files
COPY package*.json ./

# Cài đặt dependencies trong môi trường Docker
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build ứng dụng
RUN npm run build

# Bước 2: Chạy với Nginx
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]