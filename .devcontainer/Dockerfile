FROM mcr.microsoft.com/devcontainers/base:bookworm

# Enable secure connections for Debian
RUN    sed -i 's/http:/https:/g' /etc/apt/sources.list.d/debian.sources

# Docker builder default args
ARG    TARGETARCH
ARG    TARGETOS

# renovate: datasource=repology depName=debian_12/direnv versioning=loose
ARG    DIRENV_VERSION="2.32.1-2+b4"
# renovate: datasource=repology depName=debian_12/python3 versioning=loose
ARG    PYTHON3_VERSION="3.11.2-1+b1"
# renovate: datasource=repology depName=debian_12/pipx versioning=loose
ARG    PIPX_VERSION="1.1.0-1"
# renovate: datasource=repology depName=debian_12/sshpass versioning=loose
ARG    SSHPASS_VERSION="1.09-1+b1"

# Install debian packages required for this devcontainer
RUN    --mount=type=cache,target=/var/cache/apt,sharing=locked \
       --mount=type=cache,target=/var/lib/apt,sharing=locked \
       set -e; \
       apt-get update; \
       apt-get install -y --no-install-recommends \
       direnv=${DIRENV_VERSION} \
       python3=${PYTHON3_VERSION} \
       python3-venv=${PYTHON3_VERSION} \
       pipx=${PIPX_VERSION} \
       # Ansible requirements
       sshpass=${SSHPASS_VERSION}

USER   vscode

# Install poetry
RUN    set -e; \
       pipx ensurepath; \
       pipx install poetry


# Set up direnv hook
RUN    set -e; \
       echo 'eval "$(direnv hook bash)"' >> ~/.bashrc; \
       echo 'eval "$(direnv hook bash)"' >> ~/.bash_profile; \
       echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc

# Copy direnv config
COPY   direnv/config.toml /home/vscode/.config/direnv/config.toml

# Enable git
RUN    git config --global --add safe.directory /workspaces
