---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN DETAIL
# ORQQCN DETAIL

Returns formatted detailed information regarding the consult request,including result report if available.

Property | Value
--- | ---
Label | DETAIL
Routine | [ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CONSULT ID | LITERAL | 16 | true | Consult ID or identifier



### MUMPS Method Description

Property | Value
--- | ---
Method | [DETAIL^ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html)
Method Comment | return formatted consult request details (plus result note if available):
Input Parameters | CONSULT
Code | {::nomarkdown}<pre><code> N GMRCOER<br/> S GMRCOER=2<br/> S ORQY=$NA(^TMP("GMRCR",$J,"DT"))<br/> D DT^GMRCSLM2(CONSULT)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}