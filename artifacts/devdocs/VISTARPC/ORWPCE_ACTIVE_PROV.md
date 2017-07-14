---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE ACTIVE PROV<br/>
# ORWPCE ACTIVE PROV

This calls the PCE API $$ACTIVPRV^PXAPI(provider ien, encounter d/t) tosee if the provider can be stored by PCE.   Returns a 1 if provider is good and 0 if the provider is not active or does not have an active person class.

## Properties

Property | Value
--- | ---
Label | ACTIVPRV
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROVIDER IEN | LITERAL |  | true | 
ENCOUNTER DATE/TIME | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [ACTIVPRV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | get if provider is active or not
Input Parameters | ORWPROV, ORWDT
Code | {::nomarkdown}<pre><code> S ORRETURN=$$ACTIVPRV^PXAPI(ORWPROV,ORWDT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}