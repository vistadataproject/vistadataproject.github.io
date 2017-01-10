---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGTP PUT PREFERENCES 

 property | value 
--- | --- 
 label | MAGTP PUT PREFERENCES
 tag | PUTUPREF
 routine | [MAGTP011](http://code.osehra.org/dox/Routine_MAGTP011_source.html)
 return value type | ARRAY
 description | Set the user's setting/configuration preferences in XML format in the configuration file (#2006.13)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ENT | LIST |  | true | Input array:First Line:      DUZ^LABELFollowing Lines: One XML line of textIf DUZ is null, default to current DUZ | 