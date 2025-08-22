# Devcontainer base image with Node.js for React development
# Uses Microsoft's devcontainers image which includes common tools (git, sudo, zsh, curl)
FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install extras commonly useful in JS/React repos
# - git-lfs: some course branches or assets may use LFS
# - ca-certificates/curl: robust HTTPS + troubleshooting
USER root
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        git-lfs \
        ca-certificates \
        curl \
    && git lfs install \
    && rm -rf /var/lib/apt/lists/*

# Enable Corepack so Yarn and pnpm are available without global installs.
# This respects the package manager/versions declared by each branch.
RUN corepack enable \
    && corepack prepare yarn@stable --activate \
    && corepack prepare pnpm@latest --activate

# Helpful default env for Node in containers
ENV NODE_ENV=development \
    NPM_CONFIG_FUND=false \
    NPM_CONFIG_AUDIT=false

# Expose common dev ports (React dev servers, Vite, Live Server)
EXPOSE 3000 5173 5500 8080

# Use the non-root user provided by the base image for better security
USER node

# No WORKDIR set here; VS Code devcontainers mounts the repo and sets it.
# The onCreateCommand/postAttachCommand are defined in devcontainer.json.
