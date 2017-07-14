---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS33 COMPLOC<br/>
# ORWDPS33 COMPLOC

This RPC will return a 0 if the patient location is the same location as the original order. It will return a 1 if the location is different.

## Properties

Property | Value
--- | ---
Label | COMPLOC
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORID | LITERAL |  | true | This is the IEN of the original order from file 100
LOC | LITERAL |  | true | This is the encounter location the order is being written for.



## MUMPS Method Description

Property | Value
--- | ---
Method | [COMPLOC^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Input Parameters | ORID, LOC
Code | {::nomarkdown}<pre><code> S ORY=0<br/> I LOC'=+$P($G(^OR(100,+ORID,0)),U,10) S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}