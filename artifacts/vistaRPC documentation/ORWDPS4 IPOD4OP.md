---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS4 IPOD4OP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 IPOD4OP{:/}
 tag | {::nomarkdown}IPOD4OP{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | True: is an Inpt (IV OI) order on an OutPatient
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | ```{::nomarkdown} Q:'$D(^OR(100,+ORID,0))<br/> S ORY=0<br/> N APKG,ADLG,ADG,APTCLS,RXDG,UDDLG,IPPKG<br/> S (RXDG,UDDLG,IPPKG)=0<br/> S RXDG=+$O(^ORD(100.98,"B","O RX",0))<br/> S UDDLG=+$O(^ORD(101.41,"B","PSJ OR PAT OE",0))<br/> S IPPKG=+$O(^DIC(9.4,"B","INPATIENT MEDICATIONS",0))<br/> S ADLG=+$P($G(^OR(100,+ORID,0)),U,5)<br/> S ADG=$P($G(^OR(100,+ORID,0)),U,11)<br/> S APKG=$P($G(^OR(100,+ORID,0)),U,14)<br/> S APTCLS=$P($G(^OR(100,+ORID,0)),U,12)<br/> I ADG=RXDG,(ADLG=UDDLG),(APKG=IPPKG),(APTCLS="I") S ORY=1```{:/}




 Generated on January 13th 2017, 7:11:27 am