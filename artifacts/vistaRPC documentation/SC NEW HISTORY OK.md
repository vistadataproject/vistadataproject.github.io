---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC NEW HISTORY OK 

 property | value 
--- | --- 
 label | SC NEW HISTORY OK
 tag | NEWHIST
 routine | [SCUTBK10](http://code.osehra.org/dox/Routine_SCUTBK10_source.html)
 return value type | SINGLE VALUE
 description | This call passes back whether the date for a new history entry is validor not.  Primarily for files 404.52, 404.58, 404.59.  Returns a1 if ok, or a 0 if not.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LIST ATTRIBUTES | LIST | 512 | true |  | 