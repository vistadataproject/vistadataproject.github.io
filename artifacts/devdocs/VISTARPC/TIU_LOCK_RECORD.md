---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU LOCK RECORD<br/>
# TIU LOCK RECORD

This RPC will issue an incremental LOCK on the record identified by theTIUDA parameter, returning an integer truth value indicating successor failure in obtaining the LOCK.

## Properties

Property | Value
--- | ---
Label | LOCK
Routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the IEN of the record in the TIU DOCUMENT FILE (#8925).



## MUMPS Method Description

Property | Value
--- | ---
Method | [LOCK^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Method Comment | Bid for lock on a TIU Document record
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> L +^TIU(8925,+TIUDA):1 I  S ERR=0<br/> E  S ERR="1^ Another session has this record locked."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}