---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET FULL STATUS TYPES 

 property | value 
--- | --- 
 label | DSIR GET FULL STATUS TYPES
 tag | GETSTDSP
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | ARRAY
 description | THIS RPC RETURNS THE CONTENTS OF THE STATUS CODE FILE (^DSIR(19620.41))

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ACT | LITERAL | 1 | true | ACT - INDICATED IF A STATUS IS ACTIVE (1) OR INACTIVE (0). | 