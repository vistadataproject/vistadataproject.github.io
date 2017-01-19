---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORR GET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR GET{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of orders & and associated fields and text.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GET^[ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}DFN<br>FILTER<br>GROUPS{:/}
 Code | {::nomarkdown}  Q  ; don't call until using same treating specialty logic as AGET<br> N ORLIST,ORIFN,X0,X3,X8,IDX,IFN,ACT,PRV,LN,TXT,STRT,STOP,CSTS,EYE,DEA ;PKI<br> K ^TMP("ORR",$J)<br> S (IDX,LST)=0 S:'$D(GROUPS) GROUPS=1 S:'$D(FILTER) FILTER=2<br> D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"","","",0,1)<br> S EYE=0 F  S EYE=$O(^TMP("ORR",$J,ORLIST,EYE)) Q:'EYE  S IFN=^(EYE) D<br> . S ACT=$P(IFN,";",2),IFN=+IFN,X0=^OR(100,IFN,0),X3=^(3),X8=^(8,ACT,0)<br> . D GETFLDS<br> K ^TMP("ORR",$J)<br> G EXIT{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}