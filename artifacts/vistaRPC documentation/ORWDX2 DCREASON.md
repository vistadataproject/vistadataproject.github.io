---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX2 DCREASON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX2 DCREASON{:/}
 tag | {::nomarkdown}DCREASON{:/}
 routine | [ORWDX2](http://code.osehra.org/dox/Routine_ORWDX2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to return a list of valid discontinuation reasons.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DCREASON^[ORWDX2](http://code.osehra.org/dox/Routine_ORWDX2_source.html)
 Method comment | Return a list of DC reasons
 Code | {::nomarkdown}  N ARRAY,CNT,ERROR,IEN,ILST,NAME,SEQARR,X<br> S ILST=1,LST(ILST)="~DCReason"<br> S IEN=0 F  S IEN=$O(^ORD(100.03,IEN)) Q:'IEN  S X=^(IEN,0) D<br> . I $P(X,U,4) Q                              ; inactive<br> . I $P(X,U,5)'=+$O(^DIC(9.4,"C","OR",0)) Q   ; not OR pkg<br> . I $P(X,U,7)=+$O(^ORD(100.02,"C","A",0)) Q  ; nature=auto<br> . S ARRAY($P(X,U))="i"_IEN_U_$P(X,U)<br> D GETLST^XPAR(.SEQARR,"SYS","OR DC REASON LIST","Q",.ERROR)<br> F CNT=1:1:SEQARR D<br> . S IEN=$P(SEQARR(CNT),U,2),NAME=$P(^ORD(100.03,IEN,0),U)<br> . S ILST=ILST+1,LST(ILST)="i"_IEN_U_NAME<br> . I $D(ARRAY(NAME))>0 K ARRAY(NAME)<br> I $D(ARRAY)'>0 Q<br> S NAME="" F  S NAME=$O(ARRAY(NAME)) Q:NAME=""  D<br> .S ILST=ILST+1,LST(ILST)=ARRAY(NAME){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}