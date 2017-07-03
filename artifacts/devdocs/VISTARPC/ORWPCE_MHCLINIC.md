---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE MHCLINIC
# ORWPCE MHCLINIC

Returns TRUE of the indicated clinic is a mental health clinic.

Property | Value
--- | ---
Label | MHCLINIC
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | Clinic IEN.



### MUMPS Method Description

Property | Value
--- | ---
Method | [MHCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | See if this is a mental health clinic
Input Parameters | ORIEN
Code | {::nomarkdown}<pre><code> I $T(MHCLIN^SDUTL2)="" S ORY=1<br/> E  S ORY=$$MHCLIN^SDUTL2(ORIEN)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}