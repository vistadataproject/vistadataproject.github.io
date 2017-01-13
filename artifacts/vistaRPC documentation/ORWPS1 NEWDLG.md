---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS1 NEWDLG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS1 NEWDLG{:/}
 tag | {::nomarkdown}NEWDLG{:/}
 routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns order dialog information for a new medication.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return order dialog info for New Medication
 Input Parameters | {::nomarkdown}INPAT{:/}
 Lines | ```{::nomarkdown} N DGRP,ID,IEN,TXT,TYP,X,X0,X5<br/> I INPAT S X=$$GET^XPAR("ALL","ORWDX NEW MED","i","I")<br/> E  S X=$$GET^XPAR("ALL","ORWDX NEW MED","o","I")<br/> S IEN=+X,X0=$G(^ORD(101.41,IEN,0)),X5=$G(^(5))<br/> S TYP=$P(X0,U,4),DGRP=+$P(X0,U,5),ID=+$P(X5,U,5),TXT=$P(X5,U,4)<br/> S Y=IEN_";"_ID_";"_DGRP_";"_TYP_U_TXT```{:/}




 Generated on January 13th 2017, 7:11:27 am