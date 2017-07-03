---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU ISPRF
# TIU ISPRF

This RPC is to check to see if the passed in TIU DOCUMENT TITLE IEN is a Patient Record Flag TITLE.

Property | Value
--- | ---
Label | ISPRFTTL
Routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUTTL | LITERAL |  | true | TIU DOCUMENT TITLE IEN



### MUMPS Method Description

Property | Value
--- | ---
Method | [ISPRFTTL^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Method Comment | RPC Takes as input 8925.1 IEN
Input Parameters | TIUDA
First Comment | {::nomarkdown}<pre><code> and checks if it is a PRF title<br/> Cf ISPFTTL^TIUPRFL. which is a FUNCTION</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUCAT1,TIUCAT2,TIUD1<br/> S TIUY=0,TIUD1=""<br/> S TIUCAT1=+$$DDEFIEN^TIUFLF7("PATIENT RECORD FLAG CAT I","DC")<br/> S TIUCAT2=+$$DDEFIEN^TIUFLF7("PATIENT RECORD FLAG CAT II","DC")<br/> S TIUD1=$O(^TIU(8925.1,"AD",TIUDA,TIUD1))<br/> I TIUD1=TIUCAT1!(TIUD1=TIUCAT2) S TIUY=1<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}