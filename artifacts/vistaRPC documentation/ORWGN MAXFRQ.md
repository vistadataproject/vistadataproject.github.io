---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGN MAXFRQ 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGN MAXFRQ{:/}
 tag | {::nomarkdown}MAXFRQ{:/}
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC checks if the frequency of an ICD-10 search term is than the maximum allowed ICD-10 return values.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORTRM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the search term to be looked up.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MAXFRQ^[ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 Method comment | Checks if frequency of search term is greater than
 First comment | {::nomarkdown}max ICD-10 setting<br/>Input Value: ORTRM = Search term to look up<br/>Return Value: 2 pieces (first piece is 0 or 1, second piece is<br/>occurrance frequency of search term)<br/>First piece:<br/>0 - Search term frequency is less than<br/>maximum return<br/>1 - Search term frequency is greater<br/>than maximum return{:/}
 Input parameters | {::nomarkdown}ORTRM{:/}
 Code | ```  N ORMAX,ORFRQ
 S ORY=0
 I ORTRM="" Q  ;if search term not sent in, then quit
 S ORMAX=+$$MAX^LEXU("10D")
 I ORMAX=0 S ORMAX=20000  ;if Max value not set, default to 20,000
 S ORFRQ=+$$FREQ^LEXU(ORTRM)
 I ORFRQ'>ORMAX Q  ;if frequency not greater than Max value
 S ORY="1^"_ORFRQ
```




 Generated on January 14th 2017, 7:26:36 am