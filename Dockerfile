# FROM node:latest
FROM node:lts-alpine

# Set the working directory to /ksuf
WORKDIR /myapp

# Copy the current directory contents into the container at /ksuf
COPY . /myapp

# Install any needed packages specified in requirements.txt
# ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
RUN npm install -g pm2
RUN pm2 install typescript

# Make port 3000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV PORT 8000
# ENV PM2_SECRET_KEY g4rf1opft48aoxx
# ENV PM2_PUBLIC_KEY gq348itkascwcvm
# ENV PM2_MACHINE_NAME docker-server

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "src/index.ts" ]
# CMD ["npm", "start"]
# CMD ["npm", "run", "cluster"]
