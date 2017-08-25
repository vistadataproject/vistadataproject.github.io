---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMRC LIST CONSULT REQUESTS<br/>
# GMRC LIST CONSULT REQUESTS

This RPC will return a list of active and pending consult requests toassociate a result with.

## Properties

Property | Value
--- | ---
Label | RPCLIST
MUMPS Implementation | [GMRCTIU](http://code.osehra.org/dox/Routine_GMRCTIU_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Record Number of patient in file 2.



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPCLIST^GMRCTIU](http://code.osehra.org/dox/Routine_GMRCTIU_source.html)
Method Comment | Get consult list and return in GMRCY for GUI
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N GMRCI<br/> I '+$G(DFN) S GMRCY(0)=0<br/> D GETCONSL(DFN,1) ;1=returns GUI format in GMRCY array<br/> S GMRCY(0)=+$G(GMRCI)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}