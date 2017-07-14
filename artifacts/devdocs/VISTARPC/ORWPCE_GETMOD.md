---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE GETMOD<br/>
# ORWPCE GETMOD

Returns information for a specific CPT Code.

## Properties

Property | Value
--- | ---
Label | GETMOD
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MODIEN | LITERAL |  | true | CPT MODIFIER IEN



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETMOD^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | Returns info for a specific CPT Modifier
Input Parameters | ORMODIEN, ORDATE
Code | {::nomarkdown}<pre><code> N ORDATA<br/> S:'+$G(ORDATE) ORDATE=DT<br/> S ORDATA=$$MOD^ICPTMOD(ORMODIEN,"I",ORDATE,1)<br/> I +ORDATA>0 S MODINFO=ORMODIEN_U_$P(ORDATA,U,3)_U_$P(ORDATA,U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}