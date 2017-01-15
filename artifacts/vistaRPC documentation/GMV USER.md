---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV USER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV USER{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieves data about the user (e.g., parameter settings). This remote procedure call is documented in Integration Agreement 4366.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Routine tag line to call in GMVRPCU.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Other data as required for the call.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RPC^[GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html)
 Method comment | [Procedure] Main RPC call tag
 First comment | {::nomarkdown}RPC: [GMV USER]<br/>Input parameters<br/>1. RESULTS [Reference/Required] RPC Return array<br/>2. OPTION [Literal/Required] RPC Option to execute<br/>3. DATA [Literal/Required] Other data as required for call{:/}
 Input parameters | {::nomarkdown}OPTION<br>DATA{:/}
 Code | {::nomarkdown}  N GMV,GMVCAT,GMVDESC,GMVENT,GMVERR,GMVFDA,GMVFLD,GMVIEN,GMVIT,GMVNAM,GMVNAME,GMVNEW,GMVOLD,GMVOWN,GMVOWNER,GMVQUAL,GMVROOT,GMVTYPE,GMVVAL,GMVVIT,GMVSCRN<br> S RESULTS=$NA(^TMP("GMVUSER",$J)) K @RESULTS<br> D:$T(@OPTION)]"" @OPTION<br> S:'$D(@RESULTS) @RESULTS@(0)="-1^No results returned"<br> D CLEAN^DILF{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}