---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB REMOTE CLEAR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB REMOTE CLEAR{:/}
 tag | {::nomarkdown}CLEAR{:/}
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to CLEAR the data under a HANDLE in the ^XTMP global.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the HANDLE from the XWB REMOTE RPC.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CLEAR^[XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 Method comment | Clear the data under a handle
 Input parameters | {::nomarkdown}HDL{:/}
 Code | {::nomarkdown}  K ^XTMP(HDL),^TMP("XWBHDL",$J,HDL)<br> S RET(0)=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}