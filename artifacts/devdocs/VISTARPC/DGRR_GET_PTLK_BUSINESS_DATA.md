---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DGRR GET PTLK BUSINESS DATA
# DGRR GET PTLK BUSINESS DATA

Returns XML document containing data needed to perform business logicchecks on patient lookup.

Property | Value
--- | ---
Label | BUS
Routine | [DGRRLU1](http://code.osehra.org/dox/Routine_DGRRLU1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST |  |  | PARAM(&quot;PatientId_Type&quot;) &#x3D; DFN (default) or ICNPARAM(&quot;PatientId&quot;) &#x3D; value for dfn or ICNPARAM(&quot;UserId&quot;) &#x3D; DUZPARAM(&quot;UserInstitution&quot;) &#x3D; division usage default to DUZ(2)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}