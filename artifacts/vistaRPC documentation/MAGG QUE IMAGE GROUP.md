---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG QUE IMAGE GROUP 

 property | value 
--- | --- 
 label | MAGG QUE IMAGE GROUP
 tag | QUEGROUP
 routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
 return value type | SINGLE VALUE
 description | RPC Call to queue all images of an  Image group for a copy from JukeBox.  This can also be a PREFETCH, in which case the Images being  Queued have a lower priority than other copies from JukeBox

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 30 | true | This is the IEN of the Image Group in MAG(2005 file. | 
| CODE | LITERAL | 10 | true |         ; CODE is a string code for which images to Queue        ;     [\A\ Abatract        ;     [\F\ Full Resolution        ;     [\B\ Big File | 
| QCODE | LITERAL | 10 | true |  QCODE is a QUEUE code.  If = 1 then this is a prefetch | 




 ###### Generated on January 11th 2017, 6:39:42 am