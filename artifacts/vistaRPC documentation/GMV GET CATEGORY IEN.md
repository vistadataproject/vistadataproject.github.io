---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV GET CATEGORY IEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV GET CATEGORY IEN{:/}
 tag | {::nomarkdown}CATEGORY{:/}
 routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the IEN if the value is found in the GMRV VITAL CATEGORY (#120.53)file. This remote procedure call is documented in Integration Agreement 4354.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVCAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}45{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMVCAT = Name of Category (from FILE 120.53) (e.g., METHOD){:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CATEGORY^[GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 Method comment | GMV GET CATEGORY IEN [RPC entry point]
 Input parameters | {::nomarkdown}GMVCAT{:/}
 First comment | {::nomarkdown}<pre> Input<br/>  RESULT = variable name to hold result<br/>  GMVCAT = Name of Category (from FILE 120.53) (e.g., METHOD)<br/> Output: Returns the IEN if GMVTYPE exists in FILE 120.53<br/>         else returns -1</pre>{:/}
 Code | {::nomarkdown}  I GMVCAT="" S RESULT=-1 Q<br> S RESULT=+$O(^GMRD(120.53,"B",GMVCAT,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} No Source Code Available (GMV_VitalsViewEnter.dll)  <br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}