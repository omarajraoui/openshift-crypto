# Step 1: Build the React application
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM openresty/openresty:latest
USER root

WORKDIR /usr/local/openresty/nginx/html/

# Remove the default NGINX configuration
RUN rm -rf /usr/local/openresty/nginx/conf/conf.d/*


# copy tyhe openresty startup bash file
COPY ./openresty/openresty.sh /usr/local/openresty/


# Copy your custom nginx.conf
COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf

# Copy the built React app
COPY --from=builder /app/dist .

RUN mkdir -p /var/run/openresty/nginx-client-body; \
    mkdir -p /var/run/openresty/nginx-fastcgi; \
    mkdir -p /var/run/openresty/nginx-proxy; \
    mkdir -p /var/run/openresty/nginx-scgi; \
    mkdir -p /var/run/openresty/nginx-uwsgi; \
    mkdir -p /usr/local/openresty/nginx/logs/ \
    chown nobody /var/run/openresty/nginx*; \
    chmod -R ugo+rwx /var/run/openresty/nginx*; \
    chmod -R ugo+rwx /usr/local/openresty/openresty.sh; \
    mkdir -p /usr/local/openresty/nginx/html/metrics/health; \
    echo "OK" > /usr/local/openresty/nginx/html/metrics/health/startup; \
    echo "OK" > /usr/local/openresty/nginx/html/metrics/health/readiness;



EXPOSE 8080
#ENTRYPOINT ["/usr/bin/openresty", "-g", "daemon off;"]

# change the entry point!

ENTRYPOINT ["/usr/local/openresty/openresty.sh"]