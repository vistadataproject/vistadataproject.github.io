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
 Lines | ```
 Q:'$D(^OR(100,+ORID,0))
 S ORY=0
 N APKG,ADLG,ADG,APTCLS,RXDG,UDDLG,IPPKG
 S (RXDG,UDDLG,IPPKG)=0
 S RXDG=+$O(^ORD(100.98,"B","O RX",0))
 S UDDLG=+$O(^ORD(101.41,"B","PSJ OR PAT OE",0))
 S IPPKG=+$O(^DIC(9.4,"B","INPATIENT MEDICATIONS",0))
 S ADLG=+$P($G(^OR(100,+ORID,0)),U,5)
 S ADG=$P($G(^OR(100,+ORID,0)),U,11)
 S APKG=$P($G(^OR(100,+ORID,0)),U,14)
 S APTCLS=$P($G(^OR(100,+ORID,0)),U,12)
 I ADG=RXDG,(ADLG=UDDLG),(APKG=IPPKG),(APTCLS="I") S ORY=1```




 Generated on January 13th 2017, 6:55:29 am