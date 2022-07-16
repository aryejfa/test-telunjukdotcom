FROM node:14.17.1

# Create app directory
RUN mkdir -p /root/dev/jp
WORKDIR /root/dev/jp

# Installing dependencies
COPY package*.json ./
COPY yarn.lock .
RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD ["yarn", "start"]