---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; XWB REMOTE GETDATA 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}XWB REMOTE GETDATA{:/}
 tag | {::nomarkdown}RTNDATA{:/}
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return an ARRAY with what ever data has been sent back fromthe remote site.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The HANDLE from the XWB REMOTE RPC call. It is used to link the call tothe data.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RTNDATA^[XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 Method comment | Return the data under a handle
 Input parameters | {::nomarkdown}HDL{:/}
 Code | ```  N I,N,RD,WRAP S RET="" K ^TMP($J,"XWB")
 I $G(HDL)="" S RET(0)="-1^Bad Handle" Q
 S N=$$CHKHDL^XWBDRPC(HDL) I N<1 S RET(0)=N Q
 I N'["Done" S RET(0)="-1^Not DONE" Q
 S N=(^XTMP(HDL,"CNT")>100)
 S I=0,RD=$S(N:$NA(^TMP($J,"XWB")),1:"RET")
 I N S RET=$NA(^TMP($J,"XWB")),I=$$RTRNFMT^XWBLIB(4) ;Make return a global
 I N M ^TMP($J,"XWB")=^XTMP(HDL,"D")
 I 'N F  S RET(I)=$G(^XTMP(HDL,"D",I)),I=$O(^XTMP(HDL,"D",I)) Q:I'>0```




 Generated on January 14th 2017, 7:26:35 am