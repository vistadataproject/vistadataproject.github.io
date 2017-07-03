---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG STORAGE FETCH SET
# MAG STORAGE FETCH SET

Sets the network location pieces 3 and 4 of the IMAGE file (#2005) 0 nodeor update the WORM network location reference piece 5 in 0 node,or update the BIG file reference in "FBIG" node.

Property | Value
--- | ---
Label | SETLOC
Routine | [MAGSFTCH](http://code.osehra.org/dox/Routine_MAGSFTCH_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 10 | true | Image IEN
NTLOC | LITERAL | 5 | true | IEN of NETWORK LOCATION file (#2005.2) to be set in IMAGE file (#2005).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}