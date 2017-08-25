---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG PAT EACH IMAGE<br/>
# MAGG PAT EACH IMAGE

Returns a list of Images with Capture date/time, image description foreach patient image, and it will list all images of all groups and allsingle images.Called from capture application to list most recent images capturedfor a patient.  

## Properties

Property | Value
--- | ---
Label | EACHIMG
MUMPS Implementation | [MAGGTIG](http://code.osehra.org/dox/Routine_MAGGTIG_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | Patient&#x27;s DFN.
MAX | LITERAL | 4 | true | The maximum number of images to return.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}