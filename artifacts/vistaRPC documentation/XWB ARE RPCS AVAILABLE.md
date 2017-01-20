---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB ARE RPCS AVAILABLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB ARE RPCS AVAILABLE{:/}
 tag | {::nomarkdown}CKRPCS{:/}
 routine | [XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}If RPC in the passed array is installed, available in relevant context,and of proper version returns 1 for that RPC. Otherwise, returns 0.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RPC{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This 0-based array contains list of RPCs to be checked along with(optionally) a minimum acceptable version of the RPC.  The format is:                 RPCName^RPCVersionNumber Th RPCVersionNumber is only used if the RUN CONTEXT parameter = \R\.  If anumeric value is in the second ^-piece and the RUN CONTEXT =\R\, the valuemust be less than or equal to the value in the VERSION field of the RemoteProcedure file for the RPC to be marked available.  Note: if the VERSIONfield is null, the check will fail for any numeric value.{:/} | 
| {::nomarkdown}RUN CONTEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Specific context in which RPCs will run.  Possible values are:      L  =  run Locally (on the server the user is logged on to)      R  =  run Remotely (on a server the user is not logged on to)If this parameter is not sent, RPC is checked for both local andremote. The check is done against the value in the INACTIVE field in the Remote Procedure file.  See that field's description for more details.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}