ARG BUILD_IMAGE=node:14.15-stretch-slim 
ARG RUNTIME_IMAGE=httpd:2.4.54-alpine


FROM ${BUILD_IMAGE} as builder
WORKDIR /output
ENV PATH /output/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install --silent #--cache-folder /image-cache
COPY . ./
FROM builder as final
RUN npm run build

FROM ${RUNTIME_IMAGE} as production 
COPY --from=final /output/build /usr/local/apache2/htdocs/my_application
EXPOSE 3000
ENTRYPOINT ["apachectl","-D","FOREGROUND"]