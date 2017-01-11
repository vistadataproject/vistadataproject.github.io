---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ JBSCN 

 property | value 
--- | --- 
 label | MAGQ JBSCN
 tag | CNP2
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | SINGLE VALUE
 description | This function returns the next image file entry to be evaluated by theBP Verifier function.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 256 | true | This value is the initial $Order value applied to the Image file. | 
| START | LIST | 32 | true | This is the starting IEN for the BP Verifier session. | 
| STOP | LITERAL | 32 | true | This is the ending IEN for the BP Verifier session. | 
| AUTO | LITERAL | 1 | true | When set this will allow the BP Verifier session to terminate automatically. | 




 Generated on January 11th 2017, 7:15:04 am