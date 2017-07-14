---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OR GET COMBAT VET<br/>
# OR GET COMBAT VET



## Properties

Property | Value
--- | ---
Label | CV
Routine | [ORMARKER](http://code.osehra.org/dox/Routine_ORMARKER_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [CV^ORMARKER](http://code.osehra.org/dox/Routine_ORMARKER_source.html)
Method Comment | Combat Vet Marker
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N CVE S CVE=$$CVEDT^DGCV(DFN)<br/> I ($P(CVE,"^",1)'=1)!($P(CVE,"^",3)=0) S RVAL(0)="NOTCV" Q<br/> N VASV<br/> D SVC^VADPT<br/> S RVAL(0)=""<br/> I $D(VASV(6,1))=1 S RVAL(0)=VASV(6,1)<br/> S RVAL(1)=""<br/> I $D(VASV(6,3))=1 S RVAL(1)=VASV(6,3)<br/> S RVAL(2)=""<br/> I $D(VASV(6,5))=1 S RVAL(2)=VASV(6,5)<br/> S RVAL(3)=""<br/> I $D(VASV(10,1))=1 S RVAL(3)=VASV(10,1)<br/> S RVAL(4)=""<br/> I (VASV(11)>0)!(VASV(12)>0)!(VASV(13)>0) S RVAL(4)="OEF/OIF"<br/> S RVAL(5)=""<br/> S RVAL(6)=""<br/> S RVAL(7)=""<br/> D KVA^VADPT<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uCombatVet.pas">uCombatVet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}