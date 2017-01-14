---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; XWB REMOTE STATUS CHECK 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}XWB REMOTE STATUS CHECK{:/}
 tag | {::nomarkdown}RPCCHK{:/}
 routine | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return the status of a remote RPC.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the handle used to check the status of the remote RPC.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RPCCHK^[XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 Method comment | RPC call to check a handle status
 Input parameters | {::nomarkdown}HDL{:/}
 Code | ```  N S,M,Z
 I $G(HDL)="" S RET(0)="-1^Bad Handle" Q
 S RET(0)=$$CHKHDL^XWBDRPC(HDL),S=$$GETNODE(HDL,"MSGID")
 I RET(0)'["Done",$L(S) D  S $P(RET(1),"^",3)=Z
 . S RET(1)=$$MSGSTAT^HLUTIL(S),M=+RET(1),Z=""
 . I M=1 S Z=$S($P(RET(1),"^",5)>1:"NOT first in queue",1:"First in queue")
 . I M=1.5 S Z="Opening connection"_$S($P(RET(1),"^",6):", open failed "_$P(RET(1),"^",6)_" times.",1:"")
 . I M=1.7 S Z="Sent, awaiting responce"
 . I M=2 S Z="Awaiting application ACK"```




 Generated on January 14th 2017, 7:26:35 am