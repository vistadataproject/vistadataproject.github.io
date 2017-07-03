---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN GET PROC SVCS
# ORQQCN GET PROC SVCS

Given an orderable item from the S.PROC XREF in 101.43, return theConsults service from 123.5 that can perform the procedure.

Property | Value
--- | ---
Label | PROCSVCS
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORDERABLE ITEM ID | LITERAL | 16 | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [PROCSVCS^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Return a list of services for a procedure
Input Parameters | ORDITM
Code | {::nomarkdown}<pre><code> N PROCIEN<br/> S PROCIEN=$P($G(^ORD(101.43,ORDITM,0)),U,2)<br/> D GETSVC^GMRCPR0(.ORY,PROCIEN)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}