---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EDPCBRD RPC 

 property | value 
--- | --- 
 label | {::nomarkdown}EDPCBRD RPC{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [EDPCBRD](http://code.osehra.org/dox/Routine_EDPCBRD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC acts as the \front controller\ for the EDIS Display Board.  It accepts requests that are initially passed into a web server.  The RPC uses the parameters that are passed in to determine which command to execute.  The returned data is formatted as XML.  The XML structure varies based a what data were requested. Since the Display Board runs in a \kiosk\ mode, this RPC allows proxy user access.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SESS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This identifies the user and site that are passed in from the Java middle tier.  In cases when the display board is running with a proxy user (in kiosk mode), the SSL configuration will determine the user and site.{:/} | 
| {::nomarkdown}PARAMS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}This is a list of parameters that were passed to the Java middle tier via an HTTP Post message.{:/} | 




 Generated on January 13th 2017, 7:15:28 am