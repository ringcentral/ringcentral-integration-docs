---
hide:
    - navigation
---

<div class="storage-hero storage-hero--sftp" markdown>

# :material-shield-alert: SFTP Security Upgrade

Important security update for SFTP server configurations.

</div>

!!! warning "Action Required"
    If your SFTP server uses the deprecated `diffie-hellman-group14-sha1` Key Exchange algorithm, you may experience connectivity issues with RingCentral Archiver. Please follow the instructions below to update your server configuration.

## Overview

RingCentral has upgraded its SFTP client software to align with modern cryptographic standards. This update enhances the security of file transfers by deprecating older, less secure Key Exchange algorithms.

## The Issue

Our SFTP client has been updated to comply with current security protocols. During connectivity tests, we identified that some SFTP servers are configured to use the `diffie-hellman-group14-sha1` algorithm, which is now deprecated due to known SHA-1 vulnerabilities.

As a result, RingCentral's security policy prevents connections to servers using only this deprecated algorithm, which may disrupt automated file transfers.

## Recommended Key Exchange Algorithms

We recommend enabling the following industry-standard Key Exchange algorithms in your SSH configuration (`sshd_config`):

| Algorithm | Priority | Notes |
|-----------|----------|-------|
| `ecdh-sha2-nistp256` | **Recommended** | Modern, fast, and secure |
| `diffie-hellman-group-exchange-sha256` | Strong Fallback | Widely supported |
| `diffie-hellman-group14-sha256` | Secure | Upgrade to legacy group14 |

## Alternative Solutions

If immediate server upgrades are not possible, consider switching to another cloud storage option as a temporary workaround:

- [Google Drive](connect-gdrive.md)
- [Box](connect-box.md)
- [Dropbox](connect-dropbox.md)

---

## Technical Guide: Upgrading OpenSSH Server

This section details the steps required to upgrade an OpenSSH/SFTP server to support modern Key Exchange (KEX) algorithms. Choose your operating system below.

=== "Linux (OpenSSH)"

    #### Prerequisites

    - **Root/Sudo Access**: You must have administrative privileges on the server.
    - **Connection Safety**: It is highly recommended to keep your current SSH session open and open a secondary session to perform the work. This prevents lockout in case of configuration errors.

    #### Step 1: Diagnose Server Version

    Before modifying configurations, ensure the OpenSSH version is capable of supporting modern algorithms.

    Run the following command on the server:

    ```bash
    ssh -V
    ```

    **Version Analysis:**

    | OpenSSH Version | Compatibility |
    |-----------------|---------------|
    | **7.4+** | Fully supports modern algorithms. Proceed to Step 2. |
    | **< 7.4** | May support some algorithms, but an OS-level package update is recommended. |
    | **< 6.0** | Too old. You must upgrade the `openssh-server` package via `yum`, `apt`, or `dnf` before proceeding. |

    #### Step 2: Configure sshd_config

    The goal is to explicitly allow modern algorithms while maintaining backward compatibility for legacy clients if necessary.

    **1. Backup the existing configuration:**

    ```bash
    sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
    ```

    **2. Edit the configuration file:**

    ```bash
    sudo nano /etc/ssh/sshd_config
    ```

    **3. Update Key Exchange Algorithms:**

    Locate the `KexAlgorithms` line. If it does not exist, add it to the end of the file. If it does exist, replace it or append the following values.

    **Recommended Configuration String:**

    ```plaintext
    KexAlgorithms ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group14-sha256,diffie-hellman-group14-sha1
    ```

    **Algorithm Breakdown:**

    | Algorithm | Description |
    |-----------|-------------|
    | `ecdh-sha2-nistp256` / `nistp384` / `nistp521` | Modern, fast, and secure (Preferred by new clients) |
    | `diffie-hellman-group-exchange-sha256` | Strong standard fallback |
    | `diffie-hellman-group14-sha256` | Secure upgrade to the legacy group14 |
    | `diffie-hellman-group14-sha1` | (Legacy) Retained at the end to ensure older devices can still connect |

    #### Step 3: Apply and Verify Changes

    **1. Test Configuration Syntax:**

    Always run this command before restarting to ensure there are no typos:

    ```bash
    sudo sshd -t
    ```

    !!! tip
        If no output is returned, the syntax is valid.

    **2. Restart SSH Service:**

    === "Systemd (CentOS 7+, Ubuntu 16+)"

        ```bash
        sudo systemctl restart sshd
        ```

    === "SysVinit (Older systems)"

        ```bash
        sudo service sshd restart
        ```

    **3. Verify the Configuration:**

    From a remote machine (the client), scan the server to confirm it now offers the new algorithms:

    ```bash
    ssh -vvv user@<your-server-ip>
    ```

    Look for the debug line: `debug2: peer server KEXINIT proposal`. It should now list `ecdh-sha2-nistp256` and other algorithms defined in Step 2.

=== "Windows (OpenSSH Server)"

    These steps apply to the **OpenSSH Server** optional feature on Windows Server and Windows 10/11.

    !!! note "Third-party Windows SFTP products"
        If you use a non-OpenSSH Windows SFTP product (for example Bitvise, CrushFTP, or another commercial server), follow that vendor’s documentation to enable modern KEX algorithms such as `ecdh-sha2-nistp256` or `diffie-hellman-group14-sha256`.

    #### Prerequisites

    - **Administrator Access**: You must run PowerShell or Command Prompt as Administrator.
    - **OpenSSH Server installed**: Confirm the OpenSSH Server Windows feature/capability is installed and the `sshd` service is running.
    - **Connection Safety**: Keep your current remote session open and use a second session when possible, so a bad config change does not lock you out.

    #### Step 1: Diagnose Server Version

    In an elevated PowerShell window, run:

    ```powershell
    ssh -V
    ```

    **Version Analysis:**

    | OpenSSH Version | Compatibility |
    |-----------------|---------------|
    | **7.4+** | Fully supports modern algorithms. Proceed to Step 2. |
    | **< 7.4** | Update OpenSSH Server through Windows Update / optional features before continuing. |

    To confirm the service is installed and running:

    ```powershell
    Get-Service sshd
    ```

    #### Step 2: Configure sshd_config

    On Windows, the OpenSSH Server configuration file is typically:

    ```plaintext
    C:\ProgramData\ssh\sshd_config
    ```

    **1. Backup the existing configuration:**

    ```powershell
    Copy-Item C:\ProgramData\ssh\sshd_config C:\ProgramData\ssh\sshd_config.bak
    ```

    **2. Edit the configuration file as Administrator** (for example with Notepad):

    ```powershell
    notepad C:\ProgramData\ssh\sshd_config
    ```

    **3. Update Key Exchange Algorithms:**

    Locate the `KexAlgorithms` line. If it does not exist, add it to the end of the file. If it does exist, replace it with the following values.

    **Recommended Configuration String:**

    ```plaintext
    KexAlgorithms ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group14-sha256,diffie-hellman-group14-sha1
    ```

    This is the same recommended set used for Linux. Prefer modern algorithms first; keep `diffie-hellman-group14-sha1` last only if you still need compatibility with older clients.

    #### Step 3: Apply and Verify Changes

    **1. Test Configuration Syntax:**

    ```powershell
    sshd -t
    ```

    !!! tip
        If no output is returned, the syntax is valid. If `sshd` is not on your PATH, run:

        ```powershell
        C:\Windows\System32\OpenSSH\sshd.exe -t
        ```

    **2. Restart the OpenSSH Server service:**

    ```powershell
    Restart-Service sshd
    ```

    You can also restart **OpenSSH SSH Server** from `services.msc`.

    **3. Verify the Configuration:**

    From another machine, connect with verbose logging:

    ```powershell
    ssh -vvv user@<your-server-ip>
    ```

    Look for the debug line: `debug2: peer server KEXINIT proposal`. It should now list `ecdh-sha2-nistp256` and other algorithms defined in Step 2.

    After the server advertises modern KEX algorithms, reconnect RingCentral Archiver to your SFTP storage and confirm the connection succeeds.

---

## Need Help?

If you have questions or need assistance with this upgrade, please contact RingCentral Support or reach out to your IT administrator for server-specific configurations.

---

## Related Resources

<div class="grid cards" markdown>

-   :material-server-network:{ .lg .middle } **Connect SFTP**

    ---

    Set up your SFTP connection with RingCentral Archiver.

    [:octicons-arrow-right-24: Connection Guide](connect-sftp.md)

-   :material-cloud-outline:{ .lg .middle } **Alternative Storage**

    ---

    Explore other cloud storage options if SFTP upgrade isn't possible.

    [:octicons-arrow-right-24: Storage Options](connect-storage.md)

</div>
