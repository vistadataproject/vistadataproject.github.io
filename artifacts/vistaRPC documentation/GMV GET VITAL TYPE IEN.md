---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV GET VITAL TYPE IEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV GET VITAL TYPE IEN{:/}
 tag | {::nomarkdown}TYPE{:/}
 routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the IEN if the value is found in the GMRV VITAL TYPE (#120.51)file. This remote procedure call is documented in Integration Agreement 4357.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}55{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMVTYPE = Name of Vital Type (from FILE 120.51) (e.g., WEIGHT){:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TYPE^[GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 Method comment | GMV GET VITAL TYPE IEN [RPC entry point]
 Input parameters | {::nomarkdown}GMVTYPE{:/}
 First comment | {::nomarkdown}<pre> Input:<br/>   RESULT = variable name to hold result<br/>  GMVTYPE = Name of Vital Type (from FILE 120.51) (e.g., WEIGHT)<br/> Output: Returns the IEN if GMVTYPE exists in FILE 120.51<br/>         else returns -1<br/></pre>{:/}
 Code | {::nomarkdown}  I GMVTYPE="" S RESULT=-1 Q<br> S RESULT=+$O(^GMRD(120.51,"B",GMVTYPE,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} No Source Code Available (GMV_VitalsViewEnter.dll)  <br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}