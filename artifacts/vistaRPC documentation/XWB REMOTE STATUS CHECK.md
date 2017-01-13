---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB REMOTE STATUS CHECK 

 property | value 
--- | --- 
 label | {::nomarkdown}XWB REMOTE STATUS CHECK{:/}
 tag | {::nomarkdown}RPCCHK{:/}
 routine | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return the status of a remote RPC.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC call to check a handle status
 Input Parameters | {::nomarkdown}HDL{:/}
 Lines | {::nomarkdown} N S,M,Z<br/> I $G(HDL)="" S RET(0)="-1^Bad Handle" Q<br/> S RET(0)=$$CHKHDL^XWBDRPC(HDL),S=$$GETNODE(HDL,"MSGID")<br/> I RET(0)'["Done",$L(S) D  S $P(RET(1),"^",3)=Z<br/> . S RET(1)=$$MSGSTAT^HLUTIL(S),M=+RET(1),Z=""<br/> . I M=1 S Z=$S($P(RET(1),"^",5)>1:"NOT first in queue",1:"First in queue")<br/> . I M=1.5 S Z="Opening connection"_$S($P(RET(1),"^",6):", open failed "_$P(RET(1),"^",6)_" times.",1:"")<br/> . I M=1.7 S Z="Sent, awaiting responce"<br/> . I M=2 S Z="Awaiting application ACK"{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the handle used to check the status of the remote RPC.{:/} | 




 Generated on January 13th 2017, 7:15:27 am