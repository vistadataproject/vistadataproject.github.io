---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 INDEX GET TYPE 

 property | value 
--- | --- 
 label | MAG4 INDEX GET TYPE
 tag | IGT
 routine | [MAGSIXGT](http://code.osehra.org/dox/Routine_MAGSIXGT_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call is used to filter out thoseimage types that belong to a given image category (Class). When images are displayed, it is desirable to limit thelist of presented images to only those that are likelyto be relevant in the current context. This procedure accepts an \image class\ (either an IENor the name of a class) and returns all \image types\that belong to that class..

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLS | LITERAL | 160 | true | This parameter is a ',' (comma) delimited string of classes.only those index types, that match a 'class' in the string willbe returned in the result array. | 
| FLGS | LITERAL | 40 | true | ;  FLGS : An '^' delimited string;     1 IGN: Flag to IGNore the Status field;     2 INCL: Include Class in the Output string;     3 INST: Include Status in the Output String | 




Generated on January 11th 2017, 6:34:23 am