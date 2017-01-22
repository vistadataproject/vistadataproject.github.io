---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OR GET COMBAT VET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OR GET COMBAT VET{:/}
 tag | {::nomarkdown}CV{:/}
 routine | [ORMARKER](http://code.osehra.org/dox/Routine_ORMARKER_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CV^[ORMARKER](http://code.osehra.org/dox/Routine_ORMARKER_source.html)
 Method comment | Combat Vet Marker
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N CVE S CVE=$$CVEDT^DGCV(DFN)<br> I ($P(CVE,"^",1)'=1)!($P(CVE,"^",3)=0) S RVAL(0)="NOTCV" Q<br> N VASV<br> D SVC^VADPT<br> S RVAL(0)=""<br> I $D(VASV(6,1))=1 S RVAL(0)=VASV(6,1)<br> S RVAL(1)=""<br> I $D(VASV(6,3))=1 S RVAL(1)=VASV(6,3)<br> S RVAL(2)=""<br> I $D(VASV(6,5))=1 S RVAL(2)=VASV(6,5)<br> S RVAL(3)=""<br> I $D(VASV(10,1))=1 S RVAL(3)=VASV(10,1)<br> S RVAL(4)=""<br> I (VASV(11)>0)!(VASV(12)>0)!(VASV(13)>0) S RVAL(4)="OEF/OIF"<br> S RVAL(5)=""<br> S RVAL(6)=""<br> S RVAL(7)=""<br> D KVA^VADPT<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uCombatVet.pas">uCombatVet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}