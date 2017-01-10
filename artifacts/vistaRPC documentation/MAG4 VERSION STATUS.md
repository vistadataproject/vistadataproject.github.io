---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 VERSION STATUS 

 property | value 
--- | --- 
 label | MAG4 VERSION STATUS
 tag | VERSTAT
 routine | [MAGGTU4](http://code.osehra.org/dox/Routine_MAGGTU4_source.html)
 return value type | SINGLE VALUE
 description | RPC to evaluate the status of an Imaging Version.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGVER | LITERAL | 100 | true | The Imaging Version to be checked.  In the format   MAG*3.0*59   or   3.0.59 | 