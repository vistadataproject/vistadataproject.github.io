---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV GET CLEAN SLATE LIST
# DENTV GET CLEAN SLATE LIST

Returns a list of all clean slates applied to a patient.   Return example: RETURN(1)="1^Dates found"                   RETURN(2)=3100101.120345   OR              RETURN(1)="-1^No clean slate present"

Property | Value
--- | ---
Label | GETCSL
Routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DPAT | LITERAL |  | true | The patient IEN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}