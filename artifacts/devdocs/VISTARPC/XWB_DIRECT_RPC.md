---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB DIRECT RPC<br/>
# XWB DIRECT RPC

 This is the Broker RPC that is called to request that a RPC be run on aremote system.  The data is passed by HL7 to the remote system as is thereturn value.  The difference between this and the XWB REMOTE RPC is thisis a blocking call meaning the user's workstation will not processanything else until the data returns from the remote system.

## Properties

Property | Value
--- | ---
Label | DIRECT
MUMPS Implementation | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOC | LITERAL | 30 | true | This is the Institution&#x27;s station # to send the RPC to.
RRPC | LITERAL | 30 | true | This is the name of the remote RPC to be run.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DIRECT^XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
Method Comment | Call a remote RPC
Input Parameters | LOC, RPC, RPCVER, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10
Code | {::nomarkdown}<pre><code> N X,I,INX,N,XWBHL7,XWBPAR,XWBPCNT,XWBDVER,XWBESSO,XWBHDL,PMAX<br/> N XWBMSG,XWBSEC,RPCIEN<br/> N HLMTIEN,HLDOM,HLECH,HLFS,HLINSTN,HLNEXT,HLNODE,HLPARAM,HLQ,HLQUIT<br/> D SETUP(1) I $G(RET(1))'="" Q<br/> D DIRECT^XWB2HL7A("ZREMOTE RPC",XWBHDL,.XWBMSG,LOC,.XWBPAR)<br/> I $P(XWBMSG,U,2) S RET(0)="-1^"_$P(XWBMSG,"^",3) Q<br/> I 'HLMTIEN S RET(0)="-1^No Message returned" Q<br/> D RETURN,RTNDATA^XWBDRPC(.RET,XWBHDL)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}