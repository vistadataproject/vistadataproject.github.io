---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV LOCATION SELECT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV LOCATION SELECT{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [GMVRPCHL](http://code.osehra.org/dox/Routine_GMVRPCHL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Select a hospital location by name, from a patient appointment or from apatient admission. Can also generate a list of active clinics. This remote procedure is documented in Integration Agreement 4461.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Routine tag line in GMVRPCHL to call.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Other data as required for the call.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RPC^[GMVRPCHL](http://code.osehra.org/dox/Routine_GMVRPCHL_source.html)
 Method comment | [Procedure] Main RPC call tag
 First comment | {::nomarkdown}<pre> RPC: [GMV LOCATION SELECT]<br/><br/> Input parameters<br/>  1. RESULTS [Reference/Required] RPC Return array<br/>  2. OPTION [Literal/Required] RPC Option to execute<br/>  3. DATA [Literal/Required] Other data as required for call<br/></pre>{:/}
 Input parameters | {::nomarkdown}OPTION<br>DATA{:/}
 Code | {::nomarkdown}  S RESULTS=$NA(^TMP("GMVHLOC",$J)) K @RESULTS<br> D:$T(@OPTION)]"" @OPTION<br> S:'$D(@RESULTS) @RESULTS@(0)="-1^No results returned"<br> D CLEAN^DILF,KVAR^VADPT{:/}


### CPRS

[GMV_VitalsViewEnter.dll]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}