---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCN32 NEWDLG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCN32 NEWDLG{:/}
 tag | {::nomarkdown}NEWDLG{:/}
 routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns dialog information when NEW CONSULT/PROCEDURE is selected fromthe consults tab.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return order dialog info for New Consult OR PROCEDURE
 Input Parameters | {::nomarkdown}ORTYPE<br/>ORLOC{:/}
 Lines | ```{::nomarkdown} N DGRP,ID,IEN,TXT,TYP,X,X0,X5,ENT<br/> S ENT="ALL"<br/> I $G(ORLOC) S ORLOC=+ORLOC_";SC(",ENT=ENT_"^"_ORLOC<br/> I ORTYPE="C" S X=$$GET^XPAR(ENT,"ORWDX NEW CONSULT",1,"I") ;ICR 2263<br/> E  S X=$$GET^XPAR(ENT,"ORWDX NEW PROCEDURE",1,"I")<br/> S IEN=+X,X0=$G(^ORD(101.41,IEN,0)),X5=$G(^(5))<br/> S TYP=$P(X0,U,4),DGRP=+$P(X0,U,5),ID=+$P(X5,U,5),TXT=$P(X5,U,4)<br/> S Y=IEN_";"_ID_";"_DGRP_";"_TYP_U_TXT<br/>```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}dialog type{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}\C\ for consult, \P\ for procedure{:/} | 




 Generated on January 13th 2017, 7:11:27 am