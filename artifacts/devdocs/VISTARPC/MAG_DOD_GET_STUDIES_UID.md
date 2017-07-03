---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DOD GET STUDIES UID
# MAG DOD GET STUDIES UID

This Remote Procedure returns information about studies,based upon the Study UID that is provided as a parameter.

Property | Value
--- | ---
Label | STUDY1
Routine | [MAGDQR21](http://code.osehra.org/dox/Routine_MAGDQR21_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STUDIES | LIST | 1000 | true | This parameter can either be provided as a single value or as an array.Each value found (either STUDIES or STUDIES(i)) will be evaluated by the Remote Procedure.Each value found must be the UID of a study.For each study specified, the Remote Procedure will returna hierarchical list of all series and images in that study.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}