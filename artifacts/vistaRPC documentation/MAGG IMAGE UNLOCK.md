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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FLAGS | LITERAL |  |  | reserved | 
| IMGLST | LIST |  | true | List of images that have to be unlocked. Images are referenced by their internal entry numbers (IENs) in the IMAGE (#2005) and IMAGE AUDIT(#2005.1) files. Example:   with RPCBroker.Param[1] do    begin      PType := list;      Mult[1] := '234';      Mult[2] := '789';    end; | 




Generated on January 11th 2017, 6:34:23 am