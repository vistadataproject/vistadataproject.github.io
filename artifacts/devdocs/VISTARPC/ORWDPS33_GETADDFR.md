---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS33 GETADDFR
# ORWDPS33 GETADDFR

This RPC takes an Additive Orderable ITEM IEN and it returns the defaultadditive frequency defined to the additive file.

Property | Value
--- | ---
Label | GETADDFR
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OIIEN | LITERAL |  | true | OIIEN &#x3D; Orderable IEN from file 101.43.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETADDFR^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Input Parameters | OIIEN
Code | {::nomarkdown}<pre><code> N PSOI,TEMP<br/> S ORY=""<br/> S PSOI=+$P($G(^ORD(101.43,OIIEN,0)),U,2)<br/> S TEMP=$$IV^PSSDSAPA(PSOI)<br/> S ORY=$$ADDFRQCV^ORMBLDP1(TEMP,"I")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}