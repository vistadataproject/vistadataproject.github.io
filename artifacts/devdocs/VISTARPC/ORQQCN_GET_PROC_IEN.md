---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN GET PROC IEN
# ORQQCN GET PROC IEN

Given orderable item IEN, return pointer to file 123.3

Property | Value
--- | ---
Label | PROCIEN
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
orderable item | LITERAL |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [PROCIEN^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Return pointer to file 123.3 given orderable item
Input Parameters | ORDITM
Code | {::nomarkdown}<pre><code> S ORY=+$P($G(^ORD(101.43,ORDITM,0)),U,2)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}