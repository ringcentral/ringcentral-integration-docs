# RingCentral Gitlab Setup

Please note that these are just standard instructions meant for people who are not familiar with Gitlab and SSH. These are not specific rules that you have to follow if you know what you are doing. This also assume that you are using a Mac.

## Gitlab access

1. Go to git.ringcentral.com and login.
2. If you do not have access to our gitlab, please go file a ticket in FreshService to request for access.
3. Once you have access, please reach out to Jack Huang via Glip to get added to the repository.

## Generate SSH key

1. Open the terminal.
2. Run the following command to generate a new SSH key:

    ```bash
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

3. This will prompt you to enter a passphrase. This is optional. Entering the passphrase will make it more secure, but you will have to enter the passphrase every time you push to Gitlab. This is usually not needed for this use.
4. The SSH key will be generated in the `~/.ssh` directory.
5. Run the following command to make sure the SSH agent is running:

    ```bash
    eval "$(ssh-agent -s)"
    ```

6. Add the SSH key to the SSH agent:

    ```bash
    ssh-add ~/.ssh/id_ed25519
    ```

## Add SSH key to Gitlab

1. In our gitlab site, click on your profile picture and go to "Preferences".
2. Click on "SSH Keys" in the left sidebar.
3. Under SSH Keys, click on "Add new key".
4. Paste the SSH key you generated in the previous step into the "Key" field.
5. Click on "Add Key".
6. Back in the terminal, run the following command to copy the SSH key to the clipboard:

    ```bash
    pbcopy < ~/.ssh/id_ed25519.pub
    ```

7. Paste the SSH key into the "Key" field in the Gitlab website.
8. Optionally, you can remove the expiration date if do not want to have to update the key later.
9. Click on "Add Key".

## Cloning the repository

1. Back in the terminal, first go back to your home directory:

    ```bash
    cd ~
    ```

2. Then create a workplace directory if you do not have on yet. You can name it whatever you want, but workspace is a good name:

    ```bash
    mkdir -p ~/workplace
    ```

3. Then go to the workplace directory:

    ```bash
    cd ~/workplace
    ```

4. Then clone the repository:

    ```bash
    git clone git@gitlab.com:ringcentral/ringcentral-docs.git
    ```

5. If this is the first time you are cloning repositories from our gitlab, the system will prompt you to confirm on adding the host to the known hosts file. Type "yes" and press enter.

6. Now the repository is cloned.

## Global git config

It is also recommended to set the global git config up first if you have not done this before. Mainly, we need to set the user name and email so that you can create commits. In the terminal, run the following command:

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

That sets the user name and email for all repositories on your machine.
