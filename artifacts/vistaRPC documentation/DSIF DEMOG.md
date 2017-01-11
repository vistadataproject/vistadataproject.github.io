---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF DEMOG 

 property | value 
--- | --- 
 label | DSIF DEMOG
 tag | DEMOG
 routine | [DSIFENA1](http://code.osehra.org/dox/Routine_DSIFENA1_source.html)
 return value type | ARRAY
 description | Pass in IEN of Patient file, return a list of Patient Demographics. Returns an array of demographic data or -1^error message (usually \Invalid Patient selection\)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 50 | true | Pass in Patient File IEN (file #2)  | 