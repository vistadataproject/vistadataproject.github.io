---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD VALIDACT<br/>
# ORWD VALIDACT

Returns 1 if action is valid for an order, otherwise 0^error.

## Properties

Property | Value
--- | ---
Label | VALIDACT
MUMPS Implementation | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VALIDACT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Method Comment | procedure
Input Parameters | ORIFN, ACTION
First Comment | {::nomarkdown}<pre><code> Return 1 if action is valid for this order, otherwise 0^error</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S VAL=$$VALID^ORCACT0(ORIFN,ACTION,.ERR)<br/> I VAL=0 S VAL=VAL_U_ERR</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}