---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGSUR FILE 

 property | value 
--- | --- 
 label | MAGGSUR FILE
 tag | FILE
 routine | [MAGGTSR1](http://code.osehra.org/dox/Routine_MAGGTSR1_source.html)
 return value type | SINGLE VALUE
 description | Files the pointers in the Surgery and Image packages.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 30 | true | Image file internal number.  ^MAG(2005, | 
| DATA | LITERAL | 245 | true | Sting of '^' delimited pieces.it is the same data that is set into the list ofsurgery cases when image application asks for list of patients cases.        ; for Imaging Versions < 2.5 the data is        ; #     DATE             DESC      SRF(IEN   FM DATE        ;CNT_U_(READABLE DATE)_U_SROPS(1)_U_SROP_U_SRSDATE        ;        ; for Imaging Versions > 2.4, the data is different        ;CNT_U_(READABLE DATE)_U_SROPS(1)_U_IMAGECT_U_\|\_SROP_U_SRSDATE | 