# Component Library Web Application


### Step 1: Clone the Repository

Open a terminal and clone the repository:

```bash
git clone git@github.com:archiegabani/my_component_library.git
cd gabani_archie_ui_garden
```

### Step 2: Build the Docker Image

1. Open a terminal and navigate to the root directory of the project where the `Dockerfile` is located.
2. Build the Docker image using the following command:

   ```bash
   docker build -t gabani_archie_coding_assignment13 .
   ```

### Step 3: Run the Docker Container

  ```bash
  docker run -d -p 8018:8018 --name gabani_archie_coding_assignment13 gabani_archie_coding_assignment13
  ```

### Step 4: Access the Application
  ```bash
  http://localhost:8018
  ```
