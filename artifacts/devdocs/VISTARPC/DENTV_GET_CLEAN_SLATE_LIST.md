---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV GET CLEAN SLATE LIST<br/>
# DENTV GET CLEAN SLATE LIST

Returns a list of all clean slates applied to a patient.   Return example: RETURN(1)="1^Dates found"                   RETURN(2)=3100101.120345   OR              RETURN(1)="-1^No clean slate present"

## Properties

Property | Value
--- | ---
Label | GETCSL
MUMPS Implementation | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DPAT | LITERAL |  | true | The patient IEN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}