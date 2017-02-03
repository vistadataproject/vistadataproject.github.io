---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETDATE{:/}
 tag | {::nomarkdown}ECDATE{:/}
 routine | [ECUURPC](http://code.osehra.org/dox/Routine_ECUURPC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Broker call returns the client date as a Fileman internal and external date format.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Client entered date and date flag passed in variable ECARY:-        DTSTR  - Date String, eg N, T@800, 4/15@1205        FLG    - Date Flag, eg R means time is required{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}