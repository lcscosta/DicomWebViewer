FROM jodogne/orthanc:1.9.7

MAINTAINER Sebastien Jodogne <s.jodogne@gmail.com>
LABEL Description="Orthanc, free DICOM server, with plugins" Vendor="The Orthanc project"

#ADD ./download-plugins.sh ./download-plugins.sh
#RUN bash ./download-plugins.sh

#RUN rm ./download-plugins.sh

COPY ./libOrthancDicomWeb.so  /run/secrets/libOrthancDicomWeb.so

VOLUME [ "/var/lib/orthanc/db" ]
EXPOSE 4242
EXPOSE 8042

ENTRYPOINT [ "Orthanc" ]
CMD [ "/etc/orthanc/" ]