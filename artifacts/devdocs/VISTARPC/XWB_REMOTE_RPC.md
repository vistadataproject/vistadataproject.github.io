---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XWB REMOTE RPC
# XWB REMOTE RPC

This is the RPC that is called to request that an application RPCbe run on a remote system.  The data is passed by HL7 to the remote systemas is the return value.   This RPC will return a HANDLE that can be used to check if the data hasbeen sent back from the remote system.  The HANDLE can be used in anotherRPC to check the status of the RPC.

Property | Value
--- | ---
Label | EN1
Routine | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOC | LITERAL | 30 | true | This is the Institution&#x27;s station # to send the RPC to.
RRPC | LITERAL | 30 | true | This is the name of the remote RPC to be run.
IP1 | LITERAL |  |  | This is the first input parameter to the remote RPC.
IP2 | LITERAL |  |  | This is the second input parameter to the remote RPC.



### MUMPS Method Description

Property | Value
--- | ---
Method | [EN1^XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
Method Comment | Call a remote RPC
Input Parameters | LOC, RPC, RPCVER, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10
First Comment | {::nomarkdown}<pre><code> with 1-10 parameters.<br/> (This reworked EN1 emtry point replaces the original EN1 entry point,<br/> which was renamed OLDEN1.)<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,INX,N,PMAX,RPCIEN,X,XWBDVER,XWBESSO,XWBHDL,XWBHL7,XWBMSG<br/> N XWBPAR,XWBPCNT,XWBSEC,ZTDESC,ZTDTH,ZTIO,ZTRTN,ZTSAVE,ZTSK<br/> D SETUP(1) I $G(RET(1))'="" QUIT  ;-><br/> S ZTSAVE("*")="",ZTRTN="DEQ^XWB2HL7C",ZTDTH=$H,ZTIO=""<br/> S ZTDESC="RPC Broker queued call from EN1~XWB2HL7"<br/> D ^%ZTLOAD<br/> I $G(ZTSK)'>0 S RET(0)="-1^Failed to task" QUIT  ;-><br/> S RET(0)=XWBHDL<br/> D SETNODE^XWBDRPC(XWBHDL,"TASK",ZTSK)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas">rLabs.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}