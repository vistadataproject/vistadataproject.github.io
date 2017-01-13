---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 PRINTGUI 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 PRINTGUI{:/}
 tag | {::nomarkdown}PRINTGUI{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC used by CPRS GUI to print orders to a designated print device.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | File|Print orders from GUI
 Input Parameters | {::nomarkdown}HLOC<br/>ORWDEV<br/>PRTLST{:/}
 Lines | ```
 N ADEVICE,ORRACT,ORPLST,I,PKG,DLG
 N BBPKG S BBPKG=+$O(^DIC(9.4,"B","VBECS",0))
 S PRTLST="",I=0
 K ORPLST M ORPLST=PRTLST
 S ORRACT=1,ADEVICE=$P(ORWDEV,U,1),ORESULT=1
 I +ADEVICE D GUI^ORPR02(.ORPLST,ADEVICE,"C",HLOC)
 S ADEVICE=$P(ORWDEV,U,2)
 K ORPLST M ORPLST=PRTLST
 D INSRTBB^ORWD2(.ORPLST) ; insert BB child Lab orders into ORPLST for printing labels
 I +ADEVICE D GUI^ORPR02(.ORPLST,ADEVICE,"L",HLOC)
 S ADEVICE=$P(ORWDEV,U,3)
 K ORPLST M ORPLST=PRTLST
 F  S I=$O(ORPLST(I)) Q:'I  D
 . S PKG=+$P($G(^OR(100,+ORPLST(I),0)),U,14),DLG=+$P($G(^OR(100,+ORPLST(I),0)),U,5)
 . I PKG=$O(^DIC(9.4,"B","DIETETICS",0)),DLG'=$O(^ORD(101.41,"B","FHW SPECIAL MEAL",0)) K ORPLST(I)
 D INSRTBB^ORWD2(.ORPLST) ; insert BB child Lab orders into ORPLST for printing requisitions
 I +ADEVICE,$D(ORPLST) D GUI^ORPR02(.ORPLST,ADEVICE,"R",HLOC)
 S ADEVICE=$P(ORWDEV,U,4)
 K ORPLST M ORPLST=PRTLST
 I +ADEVICE D GUI^ORPR02(.ORPLST,ADEVICE,"W",HLOC)```
 Leading comment lines | {::nomarkdown}ORRACT is set here to identify this as a manual reprint{:/}




 Generated on January 13th 2017, 6:55:29 am