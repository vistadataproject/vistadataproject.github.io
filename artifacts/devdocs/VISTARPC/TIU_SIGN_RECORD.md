---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU SIGN RECORD<br/>
# TIU SIGN RECORD

This API Supports the application of the user's electronic signature to aTIU document while evaluating authorization, and validating the user'selectronic signature.

## Properties

Property | Value
--- | ---
Label | SIGN
MUMPS Implementation | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This it the record number (IEN) in the TIU DOCUMENT FILE (#8925) for therecord which has been electronically signed.
TIUX | LITERAL | 245 | true | This is the network-encrypted string of what the user entered as his/herelectronic signature code.  The SIGN API will call Kernel to validate thesignature code, determine the user&#x27;s role and privilege with respect tothe document in question, and apply the signature to the document, ifappropriate.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SIGN^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Method Comment | API for /es/
Input Parameters | TIUDA, TIUX
First Comment | {::nomarkdown}<pre><code> For backward compatibility<br/> Use SIGN^TIUSRVP2 now, please</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D SIGN^TIUSRVP2(.ERR,TIUDA,.TIUX)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}