# syntax = docker/dockerfile:1

ARG UBUNTU_VERSION=24.04
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-${UBUNTU_VERSION}

RUN set -x \
    && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
    && echo 'Asia/Tokyo' >/etc/timezone

# Node.js, Git
RUN set -x \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt install -y nodejs git \
    && apt clean -y \
    && rm -rf /var/lib/apt/lists/*

# pnpm
ENV PNPM_HOME=/usr/local/bin
RUN set -x \
    && curl -fsSL https://get.pnpm.io/install.sh | bash -

ARG USERNAME=vscode
USER ${USERNAME}

WORKDIR /workspace/app

RUN mkdir node_modules

# コンテナ起動時のデフォルトコマンドを設定
CMD ["/bin/bash"]
