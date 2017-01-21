---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGSUR FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGSUR FILE{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [MAGGTSR1](http://code.osehra.org/dox/Routine_MAGGTSR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Files the pointers in the Surgery and Image packages.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Image file internal number.  ^MAG(2005,{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Sting of '^' delimited pieces.it is the same data that is set into the list ofsurgery cases when image application asks for list of patients cases.        ; for Imaging Versions < 2.5 the data is        ; #     DATE             DESC      SRF(IEN   FM DATE        ;CNT_U_(READABLE DATE)_U_SROPS(1)_U_SROP_U_SRSDATE        ;        ; for Imaging Versions > 2.4, the data is different        ;CNT_U_(READABLE DATE)_U_SROPS(1)_U_IMAGECT_U_\\_SROP_U_SRSDATE{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}