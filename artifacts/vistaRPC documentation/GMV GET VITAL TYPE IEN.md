---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV GET VITAL TYPE IEN 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV GET VITAL TYPE IEN{:/}
 tag | {::nomarkdown}TYPE{:/}
 routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the IEN if the value is found in the GMRV VITAL TYPE (#120.51)file. This remote procedure call is documented in Integration Agreement 4357.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GMV GET VITAL TYPE IEN [RPC entry point]
 Input Parameters | {::nomarkdown}GMVTYPE{:/}
 Lines | ```
 I GMVTYPE="" S RESULT=-1 Q
 S RESULT=+$O(^GMRD(120.51,"B",GMVTYPE,0))```
 Leading comment lines | {::nomarkdown}Input:<br/>RESULT = variable name to hold result<br/>GMVTYPE = Name of Vital Type (from FILE 120.51) (e.g., WEIGHT)<br/>Output: Returns the IEN if GMVTYPE exists in FILE 120.51<br/>else returns -1{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}55{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMVTYPE = Name of Vital Type (from FILE 120.51) (e.g., WEIGHT){:/} | 




 Generated on January 13th 2017, 6:55:29 am