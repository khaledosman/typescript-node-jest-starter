FROM node:latest

# Set the working directory to /ksuf
WORKDIR /myapp

# Copy the current directory contents into the container at /ksuf
COPY . /myapp

# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV PORT 8000

# CMD ["npm", "start"]
CMD ["npm", "run", "cluster"]
