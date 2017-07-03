---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU UNLOCK RECORD
# TIU UNLOCK RECORD

This RPC will decrement the lock on a given TIU Document Record, identifiedby the TIUDA input parameter. The return value will always be 0.

Property | Value
--- | ---
Label | UNLOCK
Routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the IEN of the record in the TIU DOCUMENT FILE (#8925).



### MUMPS Method Description

Property | Value
--- | ---
Method | [UNLOCK^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Method Comment | Decrement Lock on a TIU Document record
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> L -^TIU(8925,+TIUDA) S ERR=0<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}