---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDX2 DCREASON 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX2 DCREASON{:/}
 tag | {::nomarkdown}DCREASON{:/}
 routine | [ORWDX2](http://code.osehra.org/dox/Routine_ORWDX2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to return a list of valid discontinuation reasons.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DCREASON^[ORWDX2](http://code.osehra.org/dox/Routine_ORWDX2_source.html)
 Method comment | Return a list of DC reasons
 Code | ```  N ARRAY,CNT,ERROR,IEN,ILST,NAME,SEQARR,X
 S ILST=1,LST(ILST)="~DCReason"
 S IEN=0 F  S IEN=$O(^ORD(100.03,IEN)) Q:'IEN  S X=^(IEN,0) D
 . I $P(X,U,4) Q                              ; inactive
 . I $P(X,U,5)'=+$O(^DIC(9.4,"C","OR",0)) Q   ; not OR pkg
 . I $P(X,U,7)=+$O(^ORD(100.02,"C","A",0)) Q  ; nature=auto
 . S ARRAY($P(X,U))="i"_IEN_U_$P(X,U)
 D GETLST^XPAR(.SEQARR,"SYS","OR DC REASON LIST","Q",.ERROR)
 F CNT=1:1:SEQARR D
 . S IEN=$P(SEQARR(CNT),U,2),NAME=$P(^ORD(100.03,IEN,0),U)
 . S ILST=ILST+1,LST(ILST)="i"_IEN_U_NAME
 . I $D(ARRAY(NAME))>0 K ARRAY(NAME)
 I $D(ARRAY)'>0 Q
 S NAME="" F  S NAME=$O(ARRAY(NAME)) Q:NAME=""  D
 .S ILST=ILST+1,LST(ILST)=ARRAY(NAME)```




 Generated on January 14th 2017, 7:26:36 am