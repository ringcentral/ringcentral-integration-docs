# Contribution Guidelines

## Creating new branch to work on the repository

1. Always create a new branch from the current main branch when you start to work on a new feature.
2. In the terminal, this can be in the VSCode terminal. Make sure you are in the main branch.

    ```bash
    git checkout main
    ```

3. Now we want to make sure that the main branch is up to date.

    ```bash
    git pull
    ```

4. Now we want to create a new branch from the main branch. You can name the branch whatever you want, but it is recommended to use a descriptive name. For example, if you are working on new features, feat/new-feature-name is a good name. If you are fixing some issues, fix/issue-name is a good name.

    ```bash
    git checkout -b "branch-name"
    ```

5. Now you are set to start working on the new features.

## Committing changes

1. When you are done with the changes, or if you want to save the progress, you can commit the changes.
2. In the terminal, first you want to add the changes to the staging area. The `.` means all files in the current directory.

    ```bash
    git add .
    ```

3. Now you can commit the changes. It's recommended to use a descriptive commit message. For example, we use this format in our integration-apps repo: `type(scope): [ticket-id] message`.

    ```bash
    git commit -m "commit message"
    ```

    - For this project, the type is probably just 'feat' or 'fix'.
    - The scope is to show what part of the project you worked in, this can be as broad as HubSpot, or SalesForce, or as specific as SF-AAL.
    - If there are jira tickets, you can put it in the ticket-id portion. Our gitlab has an integration to link with Jira.
    - Be descriptive in the message, but keep it short and concise.
    - There are not strict rules on the format currently, but it's recommended to follow the format above.

## Pushing changes to the remote repository

1. Once you are done with the changes and all of the changes are committed, you can push the changes to the remote repository, or back to gitlab server.
2. Use the following command to push the changes to the remote repository.

    ```bash
    git push origin "branch-name" -u
    ```

    - origin is the name of the remote repository, this should be pointing to the main gitlab repository.
    - if someone else has already pushed to the remote repository with the same branch name, you will run into contacts. You can rename your branch by checking it out as a different branch and then push again with the new name.

        ```bash
        git checkout -b "new-branch-name"
        ```

    - the `-u` flag is to set the upstream branch. This allows you to commit new changes to the same branch if the review process asked for changes. Then you can just use `git push` to push the changes.

## Creating a merge request

1. Once you have pushed the changes to the remote repository, you can create a merge request to the main branch.
2. In the gitlab website, go to the repository page and click on the "Merge Requests" tab.
3. Click on "New merge request".
4. Select the source branch and the target branch. The source branch is the new branch you just pushed. The target branch is the main branch.
5. Click on "Create merge request".
6. Now you can review the changes and merge the changes to the main branch. Currently, there are no strict reviewing rules, but you should always ask for another person to review the changes.

## After the merge request is merged

1. The remote branch should be deleted automatically if you did not change the merge request settings.
2. You can now go back to your local main branch and pull the latest changes with the following command:

    ```bash
    git checkout main
    git pull
    ```

3. You should now delete the merged local branch with the following command:

    ```bash
    git branch -D "branch-name"
    ```

    - The `-D` flag is to force delete the branch. Sometime git does not recognize the local branch as merged, so we have to use the force flag.

4. It is important to never start working on a new feature from an old branch. Always create a new branch from the main branch.

## Viewing the merged results

1. Merging the request will trigger an internal build. You can review the result usually in a few minutes.
2. If the build is successful, the changes will be deployed to the test environment. You can review the changes in the [gitlab pages site](http://integration.pages.git.ringcentral.com/ringcentral-integration-docs/).
