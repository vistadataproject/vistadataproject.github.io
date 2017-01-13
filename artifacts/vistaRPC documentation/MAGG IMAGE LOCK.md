---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG IMAGE LOCK 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGG IMAGE LOCK{:/}
 tag | {::nomarkdown}LOCKIMG{:/}
 routine | [MAGGA04](http://code.osehra.org/dox/Routine_MAGGA04_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure locks one or more images. If several images are passed, then either all or none of them are locked.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}reserved{:/} | 
| {::nomarkdown}IMGLST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}List of images that have to be locked. Images are referenced by their internal entry numbers (IENs) in the IMAGE (#2005) and IMAGE AUDIT(#2005.1) files. Example:   with RPCBroker.Param[1] do    begin      PType := list;      Mult[1] := '234';      Mult[2] := '789';    end;{:/} | 




 Generated on January 13th 2017, 5:52:13 am