---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU DEFAULT DIVISION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU DEFAULT DIVISION{:/}
 tag | {::nomarkdown}DEFDIV{:/}
 routine | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns True or False for a user depending on default division information.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEFDIV^[ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 Method comment | Return user's default division, if specified.
 First comment | {::nomarkdown}<pre><br/> Variables used:<br/>   ORDD   = Default division.<br/>   ORDIV  = Division holder variable.<br/>   ORGOOD = Flag for successful default division found.<br/>   ORIEN  = IEN of user.<br/>   ORZ    = Memory array storage variable.<br/>   ORZERR = Error storage for LIST^DIC call.<br/>   Y      = Returned value.<br/></pre>{:/}
 Code | {::nomarkdown}  N ORDD,ORDIV,ORGOOD,ORIEN,ORZ,ORZERR<br> S ORIEN=DUZ,ORDIV=""<br> S Y=0,(ORDD,ORGOOD)=0             ; Initialize variables.<br> D LIST^DIC(200.02,","_ORIEN_",","@;.01;1","QP","","","","","","","ORZ","ORZERR")<br> I $P(ORZ("DILIST",0),U)=0 Q       ; No Divisions listed.<br> F  S ORDD=$O(ORZ("DILIST",ORDD)) Q:+ORDD=0!'($L(ORDD))  D  Q:ORGOOD<br> .;<br> .; See if current entry being processed is "Default" (done if so):<br> .I $P(ORZ("DILIST",ORDD,0),U,3)["Y" S ORDIV=$P(ORZ("DILIST",ORDD,0),U,2),ORGOOD=1                      ; Division text.<br> .;<br> I (ORDIV="") Q                    ; Punt if no default division.<br> I $$UP^XLFSTR(ORDIV)="SALT LAKE CITY OIFO" S Y=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fFrame.pas">fFrame.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}