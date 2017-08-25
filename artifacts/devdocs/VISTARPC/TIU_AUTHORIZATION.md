---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU AUTHORIZATION<br/>
# TIU AUTHORIZATION

This RPC allows the calling application to evaluate privilege to performany ASU-mediated action on a TIU document.

## Properties

Property | Value
--- | ---
Label | CANDO
MUMPS Implementation | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number (IEN) of the document in file 8925.
TIUACT | LITERAL |  | true | This is the ASU ACTION (.01 field from file 8930.8) which is to beperformed by the calling application (e.g., EDIT RECORD, SIGNATURE, COPY,etc.).  To function appropriately, only valid actions may be passed.



## MUMPS Method Description

Property | Value
--- | ---
Method | [CANDO^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Boolean function to evaluate privilege
Input Parameters | TIUDA, TIUACT
Code | {::nomarkdown}<pre><code> N TIUPOP,TIUDPRM S TIUPOP=0<br/> I $P($G(^TIU(8925,TIUDA,0)),U,5)>5,(TIUACT="EDIT RECORD") S TIUY="0^ You may not edit uncosigned or completed documents" Q<br/> I $S(TIUACT["SIGN":1,TIUACT="EDIT RECORD":1,TIUACT="DELETE RECORD":1,1:0) D  Q:+TIUPOP=1<br/> . L +^TIU(8925,+TIUDA):1<br/> . E  S TIUY="0^ Another session is editing this entry.",TIUPOP=1<br/> . L -^TIU(8925,+TIUDA)<br/>  I TIUACT["SIGNAT",+$$NEEDCS(TIUDA) S TIUY="0^ You must name a cosigner before signing this document." Q<br/> S TIUY=$$CANDO^TIULP(TIUDA,TIUACT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}