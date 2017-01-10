---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EDPCTRL RPC 

 property | value 
--- | --- 
 label | EDPCTRL RPC
 tag | RPC
 routine | [EDPCTRL](http://code.osehra.org/dox/Routine_EDPCTRL_source.html)
 return value type | ARRAY
 description | This RPC acts as the \front controller\ for the EDIS Tracking Application.It accepts requests that are initially passed into a web server.  The RPCuses the parameters that are passed in to determine which command to execute.  The returned data is formatted as XML.  The XML structure variesbased a what data were requested.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAMS | LIST |  | true | This is a list of parameters that were passed to the Java middle tier via an HTTP Post message. | 