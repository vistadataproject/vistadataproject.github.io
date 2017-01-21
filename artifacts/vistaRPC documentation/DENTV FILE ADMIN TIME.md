---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV FILE ADMIN TIME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV FILE ADMIN TIME{:/}
 tag | {::nomarkdown}NON{:/}
 routine | [DENTVRP4](http://code.osehra.org/dox/Routine_DENTVRP4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will file non-clinical admin time into file 226{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA = p1^p2^p3^p4 where  p1 :== duz - pointer to file 200 (also must be in file 220.5)  p2 :== single character code (A)dmin  (f)ee basis  (R)esearch         (E)ducation/training  p3 :== non-clinical admin time hr.min (0.25 - 49.75)         [in 15 minute increments]  p4 :== station.division name (from file 225){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}