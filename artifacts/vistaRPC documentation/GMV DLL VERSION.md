---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV DLL VERSION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV DLL VERSION{:/}
 tag | {::nomarkdown}DLL{:/}
 routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a YES or NO response to indicate if the Dynamic Link Library (DLL)file should be used. This remote procedure call is documented in Integration Agreement 4420.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value is the name of the file and the date/time associated with it (e.g., GMV_VITALSVIEWENTER.DLL:v. 07/21/05 10:34).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DLL^[GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 Method comment | Entry for [GMV DLL VERSION] RPC. Returns DLL version check
 Input parameters | {::nomarkdown}GMVX{:/}
 First comment | {::nomarkdown}<pre> RESULT = variable name to return check<br/>   GMVX = dll name and version date/time<br/> Returns yes or no  </pre>{:/}
 Code | {::nomarkdown}  S RESULT=$$GET^XPAR("SYS","GMV DLL VERSION",GMVX,"E")<br> S:RESULT="" RESULT="NO"<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} No Source Code Available (GMV_VitalsViewEnter.dll)  <br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}