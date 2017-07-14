---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORVW FACLIST<br/>
# ORVW FACLIST

Wrapper for the TFL^VAFCTFU1 routine, which returns all the treatingfacilities for a given patient DFN.

## Properties

Property | Value
--- | ---
Label | FACLIST
Routine | [ORVW](http://code.osehra.org/dox/Routine_ORVW_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient DFN



## MUMPS Method Description

Property | Value
--- | ---
Method | [FACLIST^ORVW](http://code.osehra.org/dox/Routine_ORVW_source.html)
Method Comment | Return a list from the TFL^VAFCTFU1 call
Input Parameters | ORDFN
Code | {::nomarkdown}<pre><code> D TFL^VAFCTFU1(.ORY,ORDFN)<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}