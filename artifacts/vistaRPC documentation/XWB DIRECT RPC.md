---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB DIRECT RPC 

 property | value 
--- | --- 
 label | {::nomarkdown}XWB DIRECT RPC{:/}
 tag | {::nomarkdown}DIRECT{:/}
 routine | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} This is the Broker RPC that is called to request that a RPC be run on aremote system.  The data is passed by HL7 to the remote system as is thereturn value.  The difference between this and the XWB REMOTE RPC is thisis a blocking call meaning the user's workstation will not processanything else until the data returns from the remote system.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Call a remote RPC
 Input Parameters | {::nomarkdown}LOC<br/>RPC<br/>RPCVER<br/>P1<br/>P2<br/>P3<br/>P4<br/>P5<br/>P6<br/>P7<br/>P8<br/>P9<br/>P10{:/}
 Lines | ```
 N X,I,INX,N,XWBHL7,XWBPAR,XWBPCNT,XWBDVER,XWBESSO,XWBHDL,PMAX
 N XWBMSG,XWBSEC,RPCIEN
 N HLMTIEN,HLDOM,HLECH,HLFS,HLINSTN,HLNEXT,HLNODE,HLPARAM,HLQ,HLQUIT
 D SETUP(1) I $G(RET(1))'="" Q
 D DIRECT^XWB2HL7A("ZREMOTE RPC",XWBHDL,.XWBMSG,LOC,.XWBPAR)
 I $P(XWBMSG,U,2) S RET(0)="-1^"_$P(XWBMSG,"^",3) Q
 I 'HLMTIEN S RET(0)="-1^No Message returned" Q
 D RETURN,RTNDATA^XWBDRPC(.RET,XWBHDL)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Institution's station # to send the RPC to.{:/} | 
| {::nomarkdown}RRPC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the remote RPC to be run.{:/} | 




 Generated on January 13th 2017, 6:55:29 am