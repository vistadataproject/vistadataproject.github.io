---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OR GET COMBAT VET 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OR GET COMBAT VET{:/}
 tag | {::nomarkdown}CV{:/}
 routine | [ORMARKER](http://code.osehra.org/dox/Routine_ORMARKER_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CV^[ORMARKER](http://code.osehra.org/dox/Routine_ORMARKER_source.html)
 Method comment | Combat Vet Marker
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N CVE S CVE=$$CVEDT^DGCV(DFN)
 I ($P(CVE,"^",1)'=1)!($P(CVE,"^",3)=0) S RVAL(0)="NOTCV" Q
 N VASV
 D SVC^VADPT
 S RVAL(0)=""
 I $D(VASV(6,1))=1 S RVAL(0)=VASV(6,1)
 S RVAL(1)=""
 I $D(VASV(6,3))=1 S RVAL(1)=VASV(6,3)
 S RVAL(2)=""
 I $D(VASV(6,5))=1 S RVAL(2)=VASV(6,5)
 S RVAL(3)=""
 I $D(VASV(10,1))=1 S RVAL(3)=VASV(10,1)
 S RVAL(4)=""
 I (VASV(11)>0)!(VASV(12)>0)!(VASV(13)>0) S RVAL(4)="OEF/OIF"
 S RVAL(5)=""
 S RVAL(6)=""
 S RVAL(7)=""
 D KVA^VADPT
```




 Generated on January 14th 2017, 7:26:36 am