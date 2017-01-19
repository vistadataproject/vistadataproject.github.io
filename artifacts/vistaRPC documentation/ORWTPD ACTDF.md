---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD ACTDF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD ACTDF{:/}
 tag | {::nomarkdown}ACTDF{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Make default time/occ setting take action on each report{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ACTDF^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Make default setting take action for each report
 Code | {::nomarkdown}  N IND,DFLT,VALUE,X,X0,X4,MAX,DFLT1<br> S DFLT=$$GET^XPAR("USR.`"_DUZ_"^DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I")<br> S IND=0,X=$P($P(DFLT,";"),"-",2)<br> F  S IND=$O(^ORD(101.24,IND)) Q:'IND  S X0=$G(^(IND,0)),X4=$G(^(4)) D<br> . I $P(X0,"^",8)="R",$P(X0,"^",12)'="M" D<br> .. S MAX=$P(X4,"^",2),DFLT1=DFLT<br> .. I MAX,X,X>MAX S DFLT1="T-"_MAX_";"_$P(DFLT,";",2,99)<br> .. D SUINDV(.Y,IND,DFLT1){:/}


### CPRS

[Options/rOptions.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}