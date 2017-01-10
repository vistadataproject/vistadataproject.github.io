---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG IMAGE UNLOCK 

 property | value 
--- | --- 
 label | MAGG IMAGE UNLOCK
 tag | UNLOCKIM
 routine | [MAGGA04](http://code.osehra.org/dox/Routine_MAGGA04_source.html)
 return value type | ARRAY
 description | This remote procedure unlocks one or more images.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL |  |  | reserved | 
| vs:Input_Parameter-8994_02 | IMGLST | LIST |  | true | List of images that have to be unlocked. Images are referenced by their internal entry numbers (IENs) in the IMAGE (#2005) and IMAGE AUDIT(#2005.1) files. Example:   with RPCBroker.Param[1] do    begin      PType := list;      Mult[1] := '234';      Mult[2] := '789';    end; | 