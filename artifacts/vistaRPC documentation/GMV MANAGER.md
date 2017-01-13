---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV MANAGER 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV MANAGER{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [GMVRPCM](http://code.osehra.org/dox/Routine_GMVRPCM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Performs many functions for the Manager module. This remote procedure call is documented in Integration Agreement 4360.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | [Procedure] Main RPC call tag
 Input Parameters | {::nomarkdown}OPTION<br/>DATA{:/}
 Lines | ```{::nomarkdown} N GMV,GMVCAT,GMVDESC,GMVENT,GMVERR,GMVFDA,GMVFLD,GMVIEN,GMVIT,GMVNAM,GMVNAME,GMVNEW,GMVOLD,GMVOWN,GMVOWNER,GMVQUAL,GMVROOT,GMVTYPE,GMVVAL,GMVVIT,GMVSCRN<br/> S RESULTS=$NA(^TMP("GMVMGR",$J)) K @RESULTS<br/> D:$T(@OPTION)]"" @OPTION<br/> S:'$D(@RESULTS) @RESULTS@(0)="-1^No results returned"<br/> D CLEAN^DILF```{:/}
 Leading comment lines | {::nomarkdown}RPC: [GMV MANAGER]<br/>Input parameters<br/>1. RESULTS [Reference/Required] RPC Return array<br/>2. OPTION [Literal/Required] RPC Option to execute<br/>3. DATA [Literal/Required] Other data as required for call{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Routine tag line in GMVRPCM to call.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Other data as required for the call.{:/} | 




 Generated on January 13th 2017, 7:11:27 am