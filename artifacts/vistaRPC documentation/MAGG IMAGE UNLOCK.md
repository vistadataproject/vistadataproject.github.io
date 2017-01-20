---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG IMAGE UNLOCK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG IMAGE UNLOCK{:/}
 tag | {::nomarkdown}UNLOCKIM{:/}
 routine | [MAGGA04](http://code.osehra.org/dox/Routine_MAGGA04_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure unlocks one or more images.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}reserved{:/} | 
| {::nomarkdown}IMGLST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}List of images that have to be unlocked. Images are referenced by their internal entry numbers (IENs) in the IMAGE (#2005) and IMAGE AUDIT(#2005.1) files. Example:   with RPCBroker.Param[1] do    begin      PType := list;      Mult[1] := '234';      Mult[2] := '789';    end;{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}