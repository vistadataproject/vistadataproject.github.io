---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; GMV USER 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}GMV USER{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieves data about the user (e.g., parameter settings). This remote procedure call is documented in Integration Agreement 4366.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Routine tag line to call in GMVRPCU.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Other data as required for the call.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RPC^[GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html)
 Method comment | [Procedure] Main RPC call tag
 First comment | {::nomarkdown}RPC: [GMV USER]<br/>Input parameters<br/>1. RESULTS [Reference/Required] RPC Return array<br/>2. OPTION [Literal/Required] RPC Option to execute<br/>3. DATA [Literal/Required] Other data as required for call{:/}
 Input parameters | {::nomarkdown}OPTION<br/>DATA{:/}
 Code | ```  N GMV,GMVCAT,GMVDESC,GMVENT,GMVERR,GMVFDA,GMVFLD,GMVIEN,GMVIT,GMVNAM,GMVNAME,GMVNEW,GMVOLD,GMVOWN,GMVOWNER,GMVQUAL,GMVROOT,GMVTYPE,GMVVAL,GMVVIT,GMVSCRN
 S RESULTS=$NA(^TMP("GMVUSER",$J)) K @RESULTS
 D:$T(@OPTION)]"" @OPTION
 S:'$D(@RESULTS) @RESULTS@(0)="-1^No results returned"
 D CLEAN^DILF```




 Generated on January 14th 2017, 7:26:35 am