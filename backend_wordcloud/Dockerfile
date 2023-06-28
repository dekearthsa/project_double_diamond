# FROM python:3.10-alpine

# RUN apk add --no-cache tini && mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# COPY . .
# RUN apk add g++ jpeg-dev zlib-dev libjpeg make
# RUN pip3 install --upgrade setuptools
# RUN pip3 install -r requirements.txt

# ENTRYPOINT [ "python" ]
# CMD ["main.py" ]

# Use the official lightweight Python image.
# https://hub.docker.com/_/python

FROM python:3.8.5-slim

ARG DEBIAN_FRONTEND="noninteractive"
RUN pip install pipenv
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN apt-get update
RUN apt-get -y install curl
RUN apt-get -qq -y install curl
RUN apt-get install gcc -y
RUN pip3 install --upgrade pip
RUN pip3 install wheel
RUN pip3 install numpy
RUN pip3 install wordcloud
RUN pip3 install -r requirements.txt

EXPOSE 3422
CMD ["python", "./main.py"]
