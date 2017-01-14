---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWORR GET 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR GET{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of orders & and associated fields and text.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GET^[ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}DFN<br/>FILTER<br/>GROUPS{:/}
 Code | ```  Q  ; don't call until using same treating specialty logic as AGET
 N ORLIST,ORIFN,X0,X3,X8,IDX,IFN,ACT,PRV,LN,TXT,STRT,STOP,CSTS,EYE,DEA ;PKI
 K ^TMP("ORR",$J)
 S (IDX,LST)=0 S:'$D(GROUPS) GROUPS=1 S:'$D(FILTER) FILTER=2
 D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"","","",0,1)
 S EYE=0 F  S EYE=$O(^TMP("ORR",$J,ORLIST,EYE)) Q:'EYE  S IFN=^(EYE) D
 . S ACT=$P(IFN,";",2),IFN=+IFN,X0=^OR(100,IFN,0),X3=^(3),X8=^(8,ACT,0)
 . D GETFLDS
 K ^TMP("ORR",$J)
 G EXIT```




 Generated on January 14th 2017, 7:26:35 am