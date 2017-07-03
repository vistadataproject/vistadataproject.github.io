---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORECS01 SAVPATH
# ORECS01 SAVPATH



Property | Value
--- | ---
Label | SAVPATH
Routine | [ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SAVPATH^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
Method Comment | Save user&#x27;s ECS path
Input Parameters | ECPATH
Code | {::nomarkdown}<pre><code> N IX,VAL,NM,HADIT,LST,INST,LAST<br/> S (IX,HADIT,INST,LAST)=0,(VAL,NM)=""<br/> D GETLST^XPAR(.LST,DUZ_";VA(200,","ORWT TOOLS MENU")<br/> S LAST=+$G(LST(LST))<br/> F  S IX=$O(LST(IX)) Q:('IX)!HADIT  D<br/> . S NM=$P($P(LST(IX),U,2),"=",1)<br/> . I $$UP^XLFSTR(NM)="EVENT CAPTURE INTERFACE" S HADIT=$P(LST(IX),U)<br/> S $P(ECPATH,"=",2)=$C(34)_$P(ECPATH,"=",2)_$C(34)<br/> S ORY=$P(ECPATH,"=",2)<br/> D:HADIT CHG^XPAR(DUZ_";VA(200,","ORWT TOOLS MENU",HADIT,ECPATH)<br/> D:'HADIT ADD^XPAR(DUZ_";VA(200,","ORWT TOOLS MENU",LAST+1,ECPATH)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rECS.pas">rECS.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}