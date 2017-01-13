---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE DELETE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Delete PCE information related to a note being deleted.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | delete PCE info when deleting a note
 Input Parameters | {::nomarkdown}VSTR<br/>DFN{:/}
 Lines | ```
 N VISIT,ORCOUNT,ORDTE,ORLOC
 N ZTIO,ZTRTN,ZTDTH,ZTSAVE,ZTDESC,ZTSYNC,ZTSK
 S ORLOC=$P(VSTR,";"),ORDTE=$P(VSTR,";",2)
 I '$D(^TMP("ORWPCE",$J,VSTR))&('$$GETENC^PXAPI(DFN,ORDTE,ORLOC)) S VAL=0 Q  ; no PCE data saved yet
 I $P(VSTR,";",3)="H" S VAL=0 Q           ; leave inpatient alone
 I $L($T(DOCCNT^TIUSRVLV))=0 S VAL=0 Q    ; leave if no tiu entry point
 D DOCCNT^TIUSRVLV(.ORCOUNT,DFN,VSTR)     ; Do not delete if another
 I ORCOUNT>0 S VAL=0 Q                    ; title points to visit
 S ZTIO="ORW/PXAPI RESOURCE",ZTRTN="DQDEL^ORWPCE1",ZTDTH=$H
 S (ZTSAVE("VSTR"),ZTSAVE("DFN"))="",ZTDESC="CPRS Delete Note/PCE"
 S ZTSYNC="ORW"_VSTR
 D ^%ZTLOAD I '$D(ZTSK) D DQDEL^ORWPCE1```




 Generated on January 13th 2017, 6:55:29 am