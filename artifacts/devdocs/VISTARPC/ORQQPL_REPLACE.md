---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL REPLACE<br/>
# ORQQPL REPLACE

REPLACES A PROBLEM THAT WAS PREVIOUSLY DELETED

## Properties

Property | Value
--- | ---
Label | REPLACE
Routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IFN | LITERAL |  |  | IFN OF PROBLEM



## MUMPS Method Description

Property | Value
--- | ---
Method | [REPLACE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Method Comment | replace problem on patient&#x27;s list
Input Parameters | DA
First Comment | {::nomarkdown}<pre><code> taken from REPLACE^GMPLRPTR</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N CHNGE,DIE,DR<br/> I $P($G(^AUPNPROB(DA,1)),U,2)'="H" D  Q  ; BAIL OUT - INVALID RECORD<br/> . S RETURN=0<br/> S DR="1.02////P"<br/> S DIE="^AUPNPROB("<br/> D ^DIE<br/> S CHNGE=DA_"^1.02^"_$$HTFM^XLFDT($H)_U_DUZ_"^H^P^Replaced^"_DUZ<br/> D AUDIT^GMPLX(CHNGE,"")<br/> D DTMOD^GMPLX(DA)<br/> S RETURN=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}