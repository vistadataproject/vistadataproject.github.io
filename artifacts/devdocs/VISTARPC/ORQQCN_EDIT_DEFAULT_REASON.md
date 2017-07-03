---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN EDIT DEFAULT REASON
# ORQQCN EDIT DEFAULT REASON

Return value (see details there) determines if and when the consults'reason for request' can be edited.

Property | Value
--- | ---
Label | EDITDRFR
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERVICE ID | LITERAL | 16 | true | IEN of consults service from file 123.5



### MUMPS Method Description

Property | Value
--- | ---
Method | [EDITDRFR^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Allow editing of reason for request?
Input Parameters | ORSVC
Code | {::nomarkdown}<pre><code> S ORY=$$REAF^GMRCDRFR(ORSVC)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}