---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ GET TREATING LIST 

 property | value 
--- | --- 
 label | MAGJ GET TREATING LIST
 tag | FACLIST
 routine | [MAGJLST1](http://code.osehra.org/dox/Routine_MAGJLST1_source.html)
 return value type | ARRAY
 description | Get Treating Facility List for a patient.  This RPC merely callsthe subroutine used for the VAFCTFU GET TREATING LIST rpc.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | Patient DFN | 