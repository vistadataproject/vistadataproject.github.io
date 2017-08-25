---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORB KILL UNSIG ORDERS ALERT<br/>
# ORWORB KILL UNSIG ORDERS ALERT

Check patient's unsigned orders, and kill unsigned orders alert for thisuser if no unsigned orders remain for his/her signature.

## Properties

Property | Value
--- | ---
Label | KILUNSNO
MUMPS Implementation | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient DFN | LITERAL | 16 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [KILUNSNO^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Method Comment | Delete unsigned order alerts if no unsigned orders remaining
Input Parameters | ORVP
Code | {::nomarkdown}<pre><code> S ORVP=ORVP_";DPT("<br/> D UNOTIF^ORCSIGN</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}