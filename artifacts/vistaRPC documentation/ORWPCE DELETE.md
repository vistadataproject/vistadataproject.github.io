---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE DELETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Delete PCE information related to a note being deleted.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DELETE^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | delete PCE info when deleting a note
 Input parameters | {::nomarkdown}VSTR<br>DFN{:/}
 Code | {::nomarkdown}  N VISIT,ORCOUNT,ORDTE,ORLOC<br> N ZTIO,ZTRTN,ZTDTH,ZTSAVE,ZTDESC,ZTSYNC,ZTSK<br> S ORLOC=$P(VSTR,";"),ORDTE=$P(VSTR,";",2)<br> I '$D(^TMP("ORWPCE",$J,VSTR))&('$$GETENC^PXAPI(DFN,ORDTE,ORLOC)) S VAL=0 Q  ; no PCE data saved yet<br> I $P(VSTR,";",3)="H" S VAL=0 Q           ; leave inpatient alone<br> I $L($T(DOCCNT^TIUSRVLV))=0 S VAL=0 Q    ; leave if no tiu entry point<br> D DOCCNT^TIUSRVLV(.ORCOUNT,DFN,VSTR)     ; Do not delete if another<br> I ORCOUNT>0 S VAL=0 Q                    ; title points to visit<br> S ZTIO="ORW/PXAPI RESOURCE",ZTRTN="DQDEL^ORWPCE1",ZTDTH=$H<br> S (ZTSAVE("VSTR"),ZTSAVE("DFN"))="",ZTDESC="CPRS Delete Note/PCE"<br> S ZTSYNC="ORW"_VSTR<br> D ^%ZTLOAD I '$D(ZTSK) D DQDEL^ORWPCE1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}