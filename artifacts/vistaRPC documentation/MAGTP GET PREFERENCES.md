---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGTP GET PREFERENCES 

 property | value 
--- | --- 
 label | MAGTP GET PREFERENCES
 tag | GETUPREF
 routine | [MAGTP011](http://code.osehra.org/dox/Routine_MAGTP011_source.html)
 return value type | ARRAY
 description | Get the user's setting/configuration preferences in XML format from the configuration file (#2006.13)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENT | LITERAL | 30 | true | DUZ^LABELDUZ of user whose preferences are to be retrievedLABEL of preference sectionIf DUZ is null, default to current DUZ | 




Generated on January 11th 2017, 6:34:23 am