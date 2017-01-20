---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB IS RPC AVAILABLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB IS RPC AVAILABLE{:/}
 tag | {::nomarkdown}CKRPC{:/}
 routine | [XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}If RPC is installed, available in relevant context, and of proper versionreturns 1.  Otherwise, returns 0.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RPC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the RPC to be tested.{:/} | 
| {::nomarkdown}RUN CONTEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Specific context in which RPC will run.  Possible values are:     L  =  run Locally (on the server the user is logged on to)     R  =  run Remotely (on a server the user is not logged on to)If this parameter is not sent, RPC is checked for both local andremote. The check is done against the value in the INACTIVE field in the Remote Procedure file.  See that field's description for more details.{:/} | 
| {::nomarkdown}VERSION NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}11{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Minimum version number of the RPC. This parameter is only used if the RUN CONTEXT parameter = \R\.  If anumeric value is in this parameter, the value must be less than or equalto the value in the VERSION field of the Remote Procedure file for theRPC is be marked available.  Note: if the VERSION field is null, thecheck will fail for any numeric value in this parameter.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}