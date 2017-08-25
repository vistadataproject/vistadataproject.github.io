---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DOD GET STUDIES UID<br/>
# MAG DOD GET STUDIES UID

This Remote Procedure returns information about studies,based upon the Study UID that is provided as a parameter.

## Properties

Property | Value
--- | ---
Label | STUDY1
MUMPS Implementation | [MAGDQR21](http://code.osehra.org/dox/Routine_MAGDQR21_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STUDIES | LIST | 1000 | true | This parameter can either be provided as a single value or as an array.Each value found (either STUDIES or STUDIES(i)) will be evaluated by the Remote Procedure.Each value found must be the UID of a study.For each study specified, the Remote Procedure will returna hierarchical list of all series and images in that study.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}