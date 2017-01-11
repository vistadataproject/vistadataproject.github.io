---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCTM AUTOLINK GETLINK 

 property | value 
--- | --- 
 label | SCTM AUTOLINK GETLINK
 tag | GETLINK
 routine | [SCAPMCU3](http://code.osehra.org/dox/Routine_SCAPMCU3_source.html)
 return value type | ARRAY
 description | This rpc returns the list of Team names that are autolinked to an entity.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| AUOTLINK TYPE | LITERAL | 20 | true | Possible types of autolinks are the following: - Ward - Specialty - Room-Bed - Practitioner - Clinic | 
| AUTOLINK IEN | LITERAL | 20 | true | Internal entry number of autoLink entity.For example, if the entity is a ward, this parameter containsthe entry number in the Ward Loaction file for the entity. | 




Generated on January 11th 2017, 6:34:23 am