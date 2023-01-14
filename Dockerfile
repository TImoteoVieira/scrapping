FROM node:16.15.0

#https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

#diretorio da aplicação
WORKDIR /app

COPY package*.json ./

#desabilita o download do chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

#configura timezone local dentro do container
ENV TZ='America/Fortaleza'

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]