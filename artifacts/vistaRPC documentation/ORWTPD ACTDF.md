---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD ACTDF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD ACTDF{:/}
 tag | {::nomarkdown}ACTDF{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Make default time/occ setting take action on each report{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ACTDF^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Make default setting take action for each report
 Code | ```  N IND,DFLT,VALUE,X,X0,X4,MAX,DFLT1
 S DFLT=$$GET^XPAR("USR.`"_DUZ_"^DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I")
 S IND=0,X=$P($P(DFLT,";"),"-",2)
 F  S IND=$O(^ORD(101.24,IND)) Q:'IND  S X0=$G(^(IND,0)),X4=$G(^(4)) D
 . I $P(X0,"^",8)="R",$P(X0,"^",12)'="M" D
 .. S MAX=$P(X4,"^",2),DFLT1=DFLT
 .. I MAX,X,X>MAX S DFLT1="T-"_MAX_";"_$P(DFLT,";",2,99)
 .. D SUINDV(.Y,IND,DFLT1)```




 Generated on January 14th 2017, 7:26:35 am