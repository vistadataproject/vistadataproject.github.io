---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MD TMDUSER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MD TMDUSER{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [MDRPCOU](http://code.osehra.org/dox/Routine_MDRPCOU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Manages the VistA interface to the TMDUser object. Available options:  SIGNON     Connects session to the server and attempts signon.  ESIG       Verifies passed e-sig.  CHKVER     Verifies client version is compatible with server.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}See RPC description.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Required data for selected option.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}