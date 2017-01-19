---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves PCE information entered into CPRS GUI.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVE^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | save PCE information
 Input parameters | {::nomarkdown}PCELIST<br>NOTEIEN<br>ORLOC{:/}
 Code | {::nomarkdown}  N VSTR,GMPLUSER<br> N ZTIO,ZTRTN,ZTDTH,ZTSAVE,ZTDESC,ZTSYNC,ZTSK<br> S VSTR=$P(PCELIST(1),U,4) K ^TMP("ORWPCE",$J,VSTR)<br> M ^TMP("ORWPCE",$J,VSTR)=PCELIST<br> S GMPLUSER=$$CLINUSER^ORQQPL1(DUZ),NOTEIEN=+$G(NOTEIEN)<br> S ZTIO="ORW/PXAPI RESOURCE",ZTRTN="DQSAVE^ORWPCE1",ZTDTH=$H<br> S ZTSAVE("PCELIST(")="",ZTDESC="Data from CPRS to PCE"<br> S ZTSAVE("GMPLUSER")="",ZTSAVE("NOTEIEN")="",ZTSAVE("DUZ")=""<br> I VSTR'["E" S ZTSYNC="ORW"_VSTR<br> S ZTSAVE("ORLOC")=""<br> D ^%ZTLOAD I '$D(ZTSK) D DQSAVE^ORWPCE1{:/}


### CPRS

[Encounter/rPCE.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}