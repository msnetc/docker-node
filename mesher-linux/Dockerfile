FROM frolvlad/alpine-glibc:latest
RUN mkdir -p /opt/mesher && \
    cd /opt/mesher && \
    wget https://cse-bucket.obs.myhwclouds.com/Mesher/mesher-1.4.10-linux-amd64.tar.gz && \
    tar  -xvzf mesher-1.4.10-linux-amd64.tar.gz && \
    mkdir -p /etc/mesher/conf && \
    mkdir -p /etc/ssl/meshercert/ && \
    touch /etc/mesher/conf/mesher.yaml && \
    mkdir -p /etc/chassis-go/schemas/
# To upload schemas using env enable SCHEMA_ROOT as environment variable using dockerfile or pass while running container
#ENV SCHEMA_ROOT=/etc/chassis-go/schemas umcomment in future
#ADD mesher.tar.gz /opt/mesher
COPY start.sh /opt/mesher/
COPY conf/ /opt/mesher/conf/
RUN ls -la /opt/mesher/conf/ 
ENV CHASSIS_HOME=/opt/mesher/
#ENV SPECIFIC_ADDR=176.122.130.202:9091
#ENV http_proxy=http://127.0.0.1:30101
WORKDIR $CHASSIS_HOME
ENTRYPOINT ["sh", "/opt/mesher/start.sh"]