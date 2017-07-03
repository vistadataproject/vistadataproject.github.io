---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDBA1 SCLST
# ORWDBA1 SCLST

Array of Order ID's and SC.

Property | Value
--- | ---
Label | SCLST
Routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 50 | true | Patient IEN.
ORLST | LIST | 255 | true | List of Orders.



### MUMPS Method Description

Property | Value
--- | ---
Method | [SCLST^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
Method Comment | RPC for compiling appropriate TxF&#x27;s
Input Parameters | DFN, ORLST
First Comment | {::nomarkdown}<pre><code> RPC titled ORWDBA1 SCLST<br/><br/>  Y       =    Returned value<br/>  DFN     =    Patient IEN<br/>  ORLST   =    List of orders<br/><br/> call for BA/TF</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N GMRCPROS,ORD,ORI,ORPKG<br/> D CPLSTBA(.Y,DFN,.ORLST)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBAGlobals.pas">BA/UBAGlobals.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}