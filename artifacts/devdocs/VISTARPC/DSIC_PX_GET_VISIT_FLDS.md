---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC PX GET VISIT FLDS<br/>
# DSIC PX GET VISIT FLDS

This will return the internal and external values for selected fields from the VISIT file (#9000010).

## Properties

Property | Value
--- | ---
Label | ILOOK
Routine | [DSICPX3](http://code.osehra.org/dox/Routine_DSICPX3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSICD | LIST | 20 | true | DSICD(n) &#x3D; p1^p2  for n&#x3D;0,1,2,3,...  where  p1 :&#x3D; &quot;V&quot; if this is the VISIT ifn, or VISIT field#  p2 :&#x3D; VISIT ifn (if p1&#x3D;&quot;V&quot;), or format code (if p1&#x3D;field#)        Format codes:  I:internal  E:external  B:both  DSICD(n) &#x3D; V^ifn is required



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}