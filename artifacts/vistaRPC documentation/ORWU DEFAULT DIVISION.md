---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU DEFAULT DIVISION 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU DEFAULT DIVISION{:/}
 tag | {::nomarkdown}DEFDIV{:/}
 routine | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns True or False for a user depending on default division information.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return user's default division, if specified.
 Lines | ```
 N ORDD,ORDIV,ORGOOD,ORIEN,ORZ,ORZERR
 S ORIEN=DUZ,ORDIV=""
 S Y=0,(ORDD,ORGOOD)=0             ; Initialize variables.
 D LIST^DIC(200.02,","_ORIEN_",","@;.01;1","QP","","","","","","","ORZ","ORZERR")
 I $P(ORZ("DILIST",0),U)=0 Q       ; No Divisions listed.
 F  S ORDD=$O(ORZ("DILIST",ORDD)) Q:+ORDD=0!'($L(ORDD))  D  Q:ORGOOD
 .;
 .; See if current entry being processed is "Default" (done if so):
 .I $P(ORZ("DILIST",ORDD,0),U,3)["Y" S ORDIV=$P(ORZ("DILIST",ORDD,0),U,2),ORGOOD=1                      ; Division text.
 .;
 I (ORDIV="") Q                    ; Punt if no default division.
 I $$UP^XLFSTR(ORDIV)="SALT LAKE CITY OIFO" S Y=1```
 Leading comment lines | {::nomarkdown}Variables used:<br/>ORDD   = Default division.<br/>ORDIV  = Division holder variable.<br/>ORGOOD = Flag for successful default division found.<br/>ORIEN  = IEN of user.<br/>ORZ    = Memory array storage variable.<br/>ORZERR = Error storage for LIST^DIC call.<br/>Y      = Returned value.{:/}




 Generated on January 13th 2017, 6:55:29 am