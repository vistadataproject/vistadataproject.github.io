---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA1 ORPKGTYP 

 property | value 
--- | --- 
 label | ORWDBA1 ORPKGTYP
 tag | ORPKGTYP
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | ARRAY
 description | Array of Order Package Types


### Method description

 property | value 
--- | --- 
 Method comment | Build BA supported packages array
 Leading comment lines | GMRC=Prosthetics, LR=Lab, PSO=Pharmacy, RA=Radiology

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORLST | LIST | 255 | true | List of Order IENs | 