# Changelog

 - 0.0.1 (07/23/2012)
   - first release.

 - 0.0.2 (01/29/2013)
   - fix bug: callback is not called if http return buffer is empty

 - 0.0.3 (02/25/2013)
   - fix bug: can not request through non-standard http/https port, such as non 80 or non 443 port
   - enhancement: always return server response content, even if return status code is not 200

 - 0.0.4 (02/25/2013)
   - fix bug: emergency fix of version 0.0.3

 - 0.0.5 (06/25/2013)
   - enhancement: let you read response header in callback

 - 0.0.6 (02/04/2014)
   - enhancement: Allow set proxy manually by call setProxy 
 
 - 0.0.7 (05/30/2014)
   - enhancement: Allow set timeout(in milliseconds) before make http request, default timeout is 1 minutes
