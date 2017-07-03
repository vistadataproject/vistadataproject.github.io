---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV LATEST VM
# GMV LATEST VM

This remote procedure call retrieves the latest vital records for a givenpatient. This remote procedure call is documented in Integration Agreement 4358.

Property | Value
--- | ---
Label | GETLAT
Routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMRDFN | LITERAL | 10 | true | GMRDFN variable is a pointer to the Patient (#2) file (i.e., DFN).



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETLAT^GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
Method Comment | GMV LATEST VM [RPC entry point]
Input Parameters | GMRDFN
First Comment | {::nomarkdown}<pre><code> RETURNS THE LATEST VITALS/MEASUREMENTS FOR A GIVEN PATIENT(GMRDFN)<br/> IN RESULT ARRAY.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> K ^TMP($J,"GRPC") D EN1^GMVLAT0(GMRDFN)<br/> S RESULT=$NA(^TMP($J,"GRPC"))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}