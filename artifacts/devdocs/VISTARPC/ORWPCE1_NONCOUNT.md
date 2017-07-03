---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE1 NONCOUNT
# ORWPCE1 NONCOUNT

Is a given HOSPITAL LOCATION (file 44) a non-count clinic?  (DBIA #964)

Property | Value
--- | ---
Label | NONCOUNT
Routine | [ORWPCE1](http://code.osehra.org/dox/Routine_ORWPCE1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORLOC | LITERAL |  |  | Pointer to file 44.



### MUMPS Method Description

Property | Value
--- | ---
Method | [NONCOUNT^ORWPCE1](http://code.osehra.org/dox/Routine_ORWPCE1_source.html)
Method Comment | Is the location a non-count clinic? (DBIA #964)
Input Parameters | ORLOC
Code | {::nomarkdown}<pre><code> Q:'ORLOC<br/> S ORY=$S($P($G(^SC(ORLOC,0)),U,17)="Y":1,1:0)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}