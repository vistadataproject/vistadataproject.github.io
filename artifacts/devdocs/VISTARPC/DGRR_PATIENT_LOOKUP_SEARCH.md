---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DGRR PATIENT LOOKUP SEARCH<br/>
# DGRR PATIENT LOOKUP SEARCH

This rpc is set to return an xml document via VistaLink that containsthe display data for a gui patient lookup.   

## Properties

Property | Value
--- | ---
Label | SEARCH
MUMPS Implementation | [DGRRLU](http://code.osehra.org/dox/Routine_DGRRLU_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST | 999 | true | Input PARAM(&quot;SEARCH TYPE&quot;) &#x3D; type of search requestedInput PARAM(&quot;SEARCH VALUE&quot;) &#x3D; value to search onInput PARAM(&quot;JOB&quot;) &#x3D; a unique job # used to check for cancelled jobs



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}