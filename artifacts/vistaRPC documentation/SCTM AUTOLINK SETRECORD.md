---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCTM AUTOLINK SETRECORD 

 property | value 
--- | --- 
 label | SCTM AUTOLINK SETRECORD
 tag | SETREC
 routine | [SCAPMCU3](http://code.osehra.org/dox/Routine_SCAPMCU3_source.html)
 return value type | SINGLE VALUE
 description | This API sets the list of autolinks for a team.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LIST OF AUTOLINKS | LIST |  | true | List of entities autolinked to the team.Each subscript in the array will have the following structure:Piece--------1- AutoLink Display Text2- Autolink Type3- AutoLink Entity IENNormally, the display text value is the .01 field but when more identifyinginformation is needed, then this string could contain more. | 
| TEAM | LITERAL | 20 | true | Pointer to entry in Team file. | 




Generated on January 11th 2017, 6:34:23 am