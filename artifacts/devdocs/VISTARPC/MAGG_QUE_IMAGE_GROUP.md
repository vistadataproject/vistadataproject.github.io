---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG QUE IMAGE GROUP
# MAGG QUE IMAGE GROUP

RPC Call to queue all images of an  Image group for a copy from JukeBox.  This can also be a PREFETCH, in which case the Images being  Queued have a lower priority than other copies from JukeBox

Property | Value
--- | ---
Label | QUEGROUP
Routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | This is the IEN of the Image Group in MAG(2005 file.
CODE | LITERAL | 10 | true |         ; CODE is a string code for which images to Queue        ;     [&quot;A&quot; Abatract        ;     [&quot;F&quot; Full Resolution        ;     [&quot;B&quot; Big File
QCODE | LITERAL | 10 | true |  QCODE is a QUEUE code.  If &#x3D; 1 then this is a prefetch



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}