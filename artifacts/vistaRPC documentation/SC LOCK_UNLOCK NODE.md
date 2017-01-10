---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC LOCK_UNLOCK NODE 

 property | value 
--- | --- 
 label | SC LOCK_UNLOCK NODE
 tag | LOCKC
 routine | [SCUTBK1](http://code.osehra.org/dox/Routine_SCUTBK1_source.html)
 return value type | SINGLE VALUE
 description | Allow locking/unlocking of M global node.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAMETERS | LIST |  | true | Contains subscripts identify node, whether to lock or unlock andtimeout(in seconds). | 