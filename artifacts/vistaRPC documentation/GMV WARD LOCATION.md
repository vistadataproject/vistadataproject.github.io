---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV WARD LOCATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV WARD LOCATION{:/}
 tag | {::nomarkdown}WARDLOC{:/}
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This procedure extracts MAS ward locations from the Ward Location file(#42). Note: No other Input Parameters besides RESULT needed.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUMMY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}When this input parameter is set to the letter \P\, only wards that have patients will be returned. Otherwise, all active wards will be returned.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}