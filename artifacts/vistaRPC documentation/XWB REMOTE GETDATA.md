---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB REMOTE GETDATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB REMOTE GETDATA{:/}
 tag | {::nomarkdown}RTNDATA{:/}
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return an ARRAY with what ever data has been sent back fromthe remote site.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The HANDLE from the XWB REMOTE RPC call. It is used to link the call tothe data.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RTNDATA^[XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 Method comment | Return the data under a handle
 Input parameters | {::nomarkdown}HDL{:/}
 Code | {::nomarkdown}  N I,N,RD,WRAP S RET="" K ^TMP($J,"XWB")<br> I $G(HDL)="" S RET(0)="-1^Bad Handle" Q<br> S N=$$CHKHDL^XWBDRPC(HDL) I N<1 S RET(0)=N Q<br> I N'["Done" S RET(0)="-1^Not DONE" Q<br> S N=(^XTMP(HDL,"CNT")>100)<br> S I=0,RD=$S(N:$NA(^TMP($J,"XWB")),1:"RET")<br> I N S RET=$NA(^TMP($J,"XWB")),I=$$RTRNFMT^XWBLIB(4) ;Make return a global<br> I N M ^TMP($J,"XWB")=^XTMP(HDL,"D")<br> I 'N F  S RET(I)=$G(^XTMP(HDL,"D",I)),I=$O(^XTMP(HDL,"D",I)) Q:I'>0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}