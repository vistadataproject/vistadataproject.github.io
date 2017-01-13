---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EDPCTRL RPC 

 property | value 
--- | --- 
 label | {::nomarkdown}EDPCTRL RPC{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [EDPCTRL](http://code.osehra.org/dox/Routine_EDPCTRL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC acts as the \front controller\ for the EDIS Tracking Application.It accepts requests that are initially passed into a web server.  The RPCuses the parameters that are passed in to determine which command to execute.  The returned data is formatted as XML.  The XML structure variesbased a what data were requested.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of parameters that were passed to the Java middle tier via an HTTP Post message.{:/} | 




 Generated on January 13th 2017, 6:44:48 am