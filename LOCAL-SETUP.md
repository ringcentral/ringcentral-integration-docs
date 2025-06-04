# Local Environment Setup

## IDE Setup

There's a number of editors or IDEs that you can use to edit this project. But generally we recommend using VSCode, or Cursor if you have access to it.

Here we assume you are using VSCode, people with Cursor access should be able to skip these steps.

1. To install VSCode, go to [VSCode](https://code.visualstudio.com/) and download the installer for MacOS. Then just follow the standard MacOS app installation process.
2. Once VSCode is installed, open it.
3. Now, we want to install the shell command to make it easier to run VSCode from the terminal.
4. In VSCode, use Cmd+Shift+P to open the command palette.
5. Type "shell command" and select "Shell Command: Install 'code' command in PATH".
6. This will install the `code` command in your terminal.
7. Now you can use the `code` command to open VSCode from the terminal.
8. To test this, go back to the terminal. Close the terminal and open a new one to ensure that it has the latest PATH environment variable.
9. Assuming that you have already cloned the repository into the recommended directory, you can now open the project in VSCode by running the following command:

    ```bash
    code ~/workplace/ringcentral-integration-docs
    ```

10. That should open the project in VSCode.

## Homebrew Setup

It is recommended to use Homebrew to install the dependencies for this project.

1. To install Homebrew, go to [Homebrew](https://brew.sh/) and follow the instructions.
2. Once Homebrew is installed, re-open the terminal to ensure that it has the latest context.

## Python 3 Setup

Mkdocs is implemented in Python 3, so we need to make sure that Python 3 is installed. We can now use Homebrew to install Python 3.

1. Run the following command to install Python 3:

    ```bash
    brew install python3
    ```

2. Once Python 3 is installed, run the following command to check if it is installed correctly:

    ```bash
    python3 --version
    ```

## Dependencies Setup

1. Now go back to VSCode with our project open.
2. If the terminal is already open, close it and open a new one. You can use Ctrl+` to open the terminal.
3. Run the following command to install the dependencies:

    ```bash
    pip3 install -r requirements.txt
    ```

4. Once the dependencies are installed, you can close the terminal and reopen it to ensure that the dependencies are loaded.

5. Now you should be able to start the development server by running the following command:

    ```bash
    mkdocs serve
    ```

6. This will start the development server and you can now open the site in your browser by going to [http://127.0.0.1:8000](http://127.0.0.1:8000).
