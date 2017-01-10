---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB IS RPC AVAILABLE 

 property | value 
--- | --- 
 label | XWB IS RPC AVAILABLE
 tag | CKRPC
 routine | [XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
 return value type | SINGLE VALUE
 description | If RPC is installed, available in relevant context, and of proper versionreturns 1.  Otherwise, returns 0.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RPC | LITERAL | 30 | true | Name of the RPC to be tested. | 
| vs:Input_Parameter-8994_02 | RUN CONTEXT | LITERAL | 1 | true | Specific context in which RPC will run.  Possible values are:     L  =  run Locally (on the server the user is logged on to)     R  =  run Remotely (on a server the user is not logged on to)If this parameter is not sent, RPC is checked for both local andremote. The check is done against the value in the INACTIVE field in the Remote Procedure file.  See that field's description for more details. | 
| vs:Input_Parameter-8994_02 | VERSION NUMBER | LITERAL | 11 | true | Minimum version number of the RPC. This parameter is only used if the RUN CONTEXT parameter = \R\.  If anumeric value is in this parameter, the value must be less than or equalto the value in the VERSION field of the Remote Procedure file for theRPC is be marked available.  Note: if the VERSION field is null, thecheck will fail for any numeric value in this parameter. | 