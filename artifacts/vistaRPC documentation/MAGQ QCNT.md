---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ QCNT 

 property | value 
--- | --- 
 label | MAGQ QCNT
 tag | QCNT
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | SINGLE VALUE
 description | This call resets the Queue pointer settings in the Imaging Queue Pointer file, #2006.031.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | place | LITERAL | 999 | true | This field represents the internal entry number of the site parameter file, #2006.1. | 
| vs:Input_Parameter-8994_02 | QUEUE | LITERAL | 33 | true | This is the queue entry to be updated by this method. | 