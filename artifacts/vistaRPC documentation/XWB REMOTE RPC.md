---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB REMOTE RPC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB REMOTE RPC{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This is the RPC that is called to request that an application RPCbe run on a remote system.  The data is passed by HL7 to the remote systemas is the return value.   This RPC will return a HANDLE that can be used to check if the data hasbeen sent back from the remote system.  The HANDLE can be used in anotherRPC to check the status of the RPC.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Institution's station # to send the RPC to.{:/} | 
| {::nomarkdown}RRPC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the remote RPC to be run.{:/} | 
| {::nomarkdown}IP1{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the first input parameter to the remote RPC.{:/} | 
| {::nomarkdown}IP2{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the second input parameter to the remote RPC.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | EN1^[XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 Method comment | Call a remote RPC
 First comment | {::nomarkdown}with 1-10 parameters.<br/>(This reworked EN1 emtry point replaces the original EN1 entry point,<br/>which was renamed OLDEN1.){:/}
 Input parameters | {::nomarkdown}LOC<br>RPC<br>RPCVER<br>P1<br>P2<br>P3<br>P4<br>P5<br>P6<br>P7<br>P8<br>P9<br>P10{:/}
 Code | {::nomarkdown}  N I,INX,N,PMAX,RPCIEN,X,XWBDVER,XWBESSO,XWBHDL,XWBHL7,XWBMSG<br> N XWBPAR,XWBPCNT,XWBSEC,ZTDESC,ZTDTH,ZTIO,ZTRTN,ZTSAVE,ZTSK<br> D SETUP(1) I $G(RET(1))'="" QUIT  ;-><br> S ZTSAVE("*")="",ZTRTN="DEQ^XWB2HL7C",ZTDTH=$H,ZTIO=""<br> S ZTDESC="RPC Broker queued call from EN1~XWB2HL7"<br> D ^%ZTLOAD<br> I $G(ZTSK)'>0 S RET(0)="-1^Failed to task" QUIT  ;-><br> S RET(0)=XWBHDL<br> D SETNODE^XWBDRPC(XWBHDL,"TASK",ZTSK){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}