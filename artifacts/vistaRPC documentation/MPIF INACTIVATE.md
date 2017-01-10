---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF INACTIVATE 

 property | value 
--- | --- 
 label | MPIF INACTIVATE
 tag | INACT
 routine | [MPIFRPC](http://code.osehra.org/dox/Routine_MPIFRPC_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call (RPC) allows the remote inactivation of a patient from the MPI at a specific site.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICN | LITERAL | 16 | true | ICN to be inactivated | 