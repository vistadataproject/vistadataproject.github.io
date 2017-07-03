---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGGADDIMAGE
# MAGGADDIMAGE

RPC Call to add new entry to Image File using UPDATE^DIE.

Property | Value
--- | ---
Label | ADD
Routine | [MAGGTIA](http://code.osehra.org/dox/Routine_MAGGTIA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGGZ | LIST |  | true | MAGGZ is an array of fields and their entries.   i.e. MAGGZ(1)&#x3D;&quot;.5^38&quot;   field .5   data is 38 If Long Description is included in fields, we create a new array to holdthe text, and pass that to UPDATE^DIE. If this entry is an object group then MAGGZ(n)&#x3D;&quot;2005.04^344&quot;(The field 2005.04 is the OBJECT GROUP MULTIPLE.) Special processing is done to &#x27;coded&#x27; entries.i.e. MAGGZ(n)&#x3D;&quot;ABS^STUFFONLY&quot;  The &quot;ABS&quot; code tells routine to take extraaction depending on piece 2, &quot;STUFFONLY&quot;, which says to NOT schedule theabstract to be created by the background processor.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}