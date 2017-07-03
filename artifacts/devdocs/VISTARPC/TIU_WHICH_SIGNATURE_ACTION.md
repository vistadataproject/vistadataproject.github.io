---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU WHICH SIGNATURE ACTION
# TIU WHICH SIGNATURE ACTION

This RPC infers whether the user is trying to sign or cosign the docuementin question, and indicates which ASU ACTION the GUI should pass to the TIUAUTHORIZATION RPC.

Property | Value
--- | ---
Label | WHATACT
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number of the TIU Document in file 8925.



### MUMPS Method Description

Property | Value
--- | ---
Method | [WHATACT^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Evaluate/return whether signature or cosignature
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N TIUD0,TIUD12,TIUSTAT,SIGNER,COSIGNER,XTRASGNR<br/> S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUD12=$G(^TIU(8925,+TIUDA,12))<br/> S SIGNER=$P(TIUD12,U,4),COSIGNER=$P(TIUD12,U,8)<br/> I (DUZ'=SIGNER),(DUZ'=COSIGNER) S XTRASGNR=+$O(^TIU(8925.7,"AE",+TIUDA,+DUZ,0))<br/> I '$G(XTRASGNR) S XTRASGNR=$$ASURG^TIUADSIG(TIUDA)<br/> S TIUSTAT=+$P(TIUD0,U,5)<br/> S TIUY=$S(TIUSTAT'>5:"SIGNATURE",+$G(XTRASGNR):"SIGNATURE",1:"COSIGNATURE")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}