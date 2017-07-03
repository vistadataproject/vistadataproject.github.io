---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG STORAGE FETCH
# MAG STORAGE FETCH

This Remote Procedure allows the invoking client to copy or move image files

Property | Value
--- | ---
Label | FETCH
Routine | [MAGSFTCH](http://code.osehra.org/dox/Routine_MAGSFTCH_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | &lt;start IMAGE ien&gt; | &lt;stop IMAGE ien&gt;
DATE | LITERAL | 10 | true | &lt;Start image saved date&gt; | &lt;Stop image saved date&gt;
NETLOC | LITERAL | 30 | true | FROM - network location | TO - network location | REMOVE source file the first pipe-separated piece of the input value will be theinternal entry number of source NETWORK LOCATION file (#2005.2)The second pipe-separated piece will be the internal entry number of destination NETWORK LOCATION file (#2005.2)The third pipe-separated piece of input value will be the option for removing source image files (&#x3D;1)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}